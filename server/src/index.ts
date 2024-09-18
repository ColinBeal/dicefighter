import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import multer from 'multer';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import playerRoutes from './routes/player.routes';
import dungeonRoutes from './routes/dungeon.routes';
import chatRoutes from './routes/chat.routes';

const upload = multer({ dest: 'uploads/' });
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.post('/api/chat', async (req, res) => {
  const { question } = req.body;
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: question,
      max_tokens: 150
    }, {
      headers: {
        'Authorization': `Bearer YOUR_API_KEY`
      }
    });
    res.json({ answer: response.data.choices[0].text.trim() });
  } catch (error) {
    res.status(500).send(error);
  }
});
// Set up CORS
app.use(cors({
  origin: 'http://localhost:4200', // replace with your frontend url
  credentials: true, // allow credentials
}));

app.use(session({
  secret: process.env.SECRET_KEY as string,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, sameSite: 'none' }, // Set secure to true if you're using HTTPS
  store: MongoStore.create({ 
    mongoUrl: 'mongodb+srv://colinb:ry4oYXRH3sBIRdvL@cluster0.10ung.mongodb.net/lootrpg?retryWrites=true&w=majority', // replace with your MongoDB connection string
  }),
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Use routes
app.use(userRoutes);
app.use(playerRoutes);
app.use(dungeonRoutes);
app.use(chatRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://colinb:ry4oYXRH3sBIRdvL@cluster0.10ung.mongodb.net/lootrpg?retryWrites=true&w=majority').then(() => {
    console.log('Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

/*const baseWeapon = new BaseItem({
  name: 'Wooden Sword',
  type: 'weapon',
  subType: 'sword',
  baseStats: {
      attackDamage: { min: 5, max: 10 },
      // Fill in other stats as needed
  },
  level: 1
});

baseWeapon.save().then(() => {
  console.log('Base weapon created');
});*/