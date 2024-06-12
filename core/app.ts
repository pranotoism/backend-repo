import express from 'express';
import userRoutes from '../routes/userRoutes';
import cors from 'cors';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from this origin
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api', userRoutes);

app.use((err: any, req: any, res: any, next: any) => {
  res.status(err.statusCode || 500).json({
    message: err.message || 'Internal Server Error',
  });
});

export default app;
