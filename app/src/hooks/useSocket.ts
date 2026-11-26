import { useEffect, useRef, useState, useCallback } from 'react';

export default function useSocket(url) {
  const socketRef = useRef(null);
  const [status, setStatus] = useState('connecting');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let reconnectTimer;
    let isUnmounted = false;
    function connect() {

      const ws = new WebSocket(url);
      socketRef.current = ws;

      ws.onopen = () => setStatus('connected');
      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          setMessages((previousMessages) => [
            ...previousMessages,
            data
          ]);
        } catch (error) {
          console.log('Unable to read message');
        }
      };
      ws.onclose = () => {
        setStatus('disconnected');
        if (!isUnmounted) {
          reconnectTimer = setTimeout(connect, 3000);
        }
      };
    }

    connect();

    return () => {
      isUnmounted = true;
      clearTimeout(reconnectTimer);
      socketRef.current?.close();
    };
  }, [url]);

  const send = useCallback((data) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(data));
    }
  }, []);

  return { status, messages, send };
}
