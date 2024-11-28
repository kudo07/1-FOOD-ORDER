import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
// type casting
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log('connected to database');
});

const app = express();

// middleware to parse json
app.use(express.json());
app.use(cors());

app.get('/test', async (req: Request, res: Response) => {
  res.json({ message: 'From the test endpoint' });
});

app.listen(7000, () => {
  console.log('server started on localhost:7000');
});
