import { WebSocketServer, WebSocket } from 'ws'

const socket = new WebSocketServer({ port: 8001 });

socket.on('connection', (ws) => {
  console.log('running');

  ws.on('message', (message) => {
    console.log(`message: ${message}`);
  });

  ws.send(JSON.stringify({ text: 'welcome' }));
  ws.on('close', () => console.log('Client disconnected'));
  ws.on('error', console.error);
});

console.log('WebSocket server running on ws://localhost:8001');
