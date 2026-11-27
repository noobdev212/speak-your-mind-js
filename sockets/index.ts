import { WebSocketServer, WebSocket } from 'ws'
import crypto from 'crypto';

const socket = new WebSocketServer({ port: 8001 });
const groups = new Map();
const client = new Map();
const members = new Map();

socket.on('connection', (ws) => {
  console.log('running');
  ws.uuid = crypto.randomUUID();
  client.set(ws.uuid, ws);
  members.set(ws.uuid, []);

  ws.on('message', (message) => {
    let msg;
    try {
      msg = JSON.parse(message);
      console.log(`message: ${msg.text}`);

      if (!groups.has(msg.groupId)) {
        groups.set(msg.groupId, [ ws.uuid ]);
        members.get(ws.uuid).push(msg.groupId);
      }
      else if (!groups.get(msg.groupId).includes(ws.uuid)) {
        groups.get(msg.groupId).push(ws.uuid);
        members.get(ws.uuid).push(msg.groupId);
      }

      console.log(groups);
      for (let id = 0; id < groups.get(msg.groupId).length; id++) {
        client.get(groups.get(msg.groupId)[id]).send(JSON.stringify({ text: msg.text }));
      }
    } catch(err) {
      console.error(err);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
    console.log(groups);
    for (let id = 0; id < members.get(ws.uuid).length; id++) {
      let gr = members.get(ws.uuid)[id];
      groups.set(gr, groups.get(gr).filter(ids => ids != ws.uuid));
    }
    console.log(groups);
  });
  ws.on('error', console.error);
});

console.log('WebSocket server running on ws://localhost:8001');
