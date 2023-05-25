import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import userRouter from './routers/userRouter.js';
import chatRouter from './routers/chatRouter.js';
import conn from './db.js';

const app = express();
const port = 5000;
const server = http.createServer(app); // HTTP sunucusu oluşturun
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }
});

app.use(cors({origin: 'http://localhost:3000', credentials: true}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

conn();
app.use('/user', userRouter);
app.use('/chat', chatRouter(io)); // io nesnesini chatRouter'a geçirin

server.listen(port, () => console.log(`Server started on port ${port}`));







  