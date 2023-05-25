import express from 'express';
import cors from 'cors';
const app = express();

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST'],
};

app.use(cors(corsOptions))

const router = express.Router();

const chatRouter = (io) => { // io nesnesini chatRouter'a geçirin
  io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('chat', (data) => {
      io.sockets.emit('chat', data); // Bağlı tüm istemcilere mesaj gönderin
    });
  });

  router.post('/', (req, res) => {
    const data = req.body;

    io.sockets.emit('chat', data); // Bağlı tüm istemcilere mesaj gönderin
    res.sendStatus(200);
  });

  return router;
};

export default chatRouter;



