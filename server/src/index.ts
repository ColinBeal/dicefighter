import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/user.routes';

const app = express();
const port = 3000;

// Use cors middleware
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Use salary routes
app.use(userRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://colinb:ry4oYXRH3sBIRdvL@cluster0.10ung.mongodb.net/<dbname>?retryWrites=true&w=majority').then(() => {
    console.log('Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});