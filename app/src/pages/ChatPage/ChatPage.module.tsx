import useSocket from '../../hooks/useSocket.ts'
import { useState, useEffect } from 'react'

export default function ChatPage() {
  const {status, messages, send} = useSocket('ws://localhost:8001');
  const [input, setInput] = useState('');

  useEffect(() => {},[messages]);

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
          { message.text ? message.text : <>This is { message.text }</>}
          </li>
        ))}
      </ul>
      <input type='text' onChange={e => setInput(e.target.value)}/>
      <button onClick={(e) => {
        e.preventDefault();
        send({
          groupId: 1,
          text: input
        });
      }}>
        submit
      </button>
    </div>
  );
}
