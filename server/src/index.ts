import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import baseShipRoutes from './routes/base-ship.routes';
import shipRoutes from './routes/ship.routes';
import { Item } from './models/item.model';
import { BaseEngine } from './models/base-engine.model';

const app = express();
const port = 3000;

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
    mongoUrl: 'mongodb+srv://colinb:ry4oYXRH3sBIRdvL@cluster0.10ung.mongodb.net/dicefighter?retryWrites=true&w=majority', // replace with your MongoDB connection string
  }),
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Use routes
app.use(userRoutes);
app.use(baseShipRoutes);
app.use(shipRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://colinb:ry4oYXRH3sBIRdvL@cluster0.10ung.mongodb.net/dicefighter?retryWrites=true&w=majority').then(() => {
    console.log('Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Find all base ships



/* 
 const baseEngine = new BaseEngine({
  _id: new mongoose.Types.ObjectId(),
  name: 'R1 Reactor',
  description: 'The most affordable reactor of the galaxy.',
  energyCore: 1,
  tiers: {
    1: {
      evade: 10,
      escapeThreshold: 10
    },
    2: {
      evade: 14,
      escapeThreshold: 9
    },
    3: {
      evade: 16,
      escapeThreshold: 9
    },
    4: {
      evade: 20,
      escapeThreshold: 8
    },
    5: {
      evade: 25,
      escapeThreshold: 7
    }
  }
});
baseEngine.save().then(() => {
  console.log('ok');
})

Item.find()
  .populate({
    path: 'weaponData',
    populate: {
      path: 'prefix suffix',
    },
  })
  .then(items => {
    console.log(items);
  })
  .catch(err => {
    console.error('Error getting items:', err);
  });


const shipId = "661580bc8ff8aeddfdb07851";
const newDices = ["66159199cb34922614323e4f", "66159199cb34922614323e4f", "66159199cb34922614323e4f", "66159199cb34922614323e4f", "66159199cb34922614323e4f", "66159199cb34922614323e4f", "66159199cb34922614323e4f", "66159199cb34922614323e4f", "66159199cb34922614323e4f", "66159199cb34922614323e4f"];

Ship.updateOne({ _id: shipId }, { dices: newDices })
  .then(result => {
    console.log('Update successful');
  })
  .catch(err => {
    console.error('Error updating document:', err);
  });




const baseShip = new BaseShip({
  _id: new mongoose.Types.ObjectId(),
  name: 'F101 - b1',
  description: 'The default Great Republic fighter ship.',
  shipClass: '660dacece546811ba45775c4',
  inventorySize: 8,
  baseStats: {
    hull: 300,
    plating: 10,
    evade: 25,
    damage: 0,
    accuracy: 50,
    shield: 0,
    shieldRegen: 0
  },
  maxEnergyCore: 12,
  special: '660dad91f72b4d741baf7c00'
});

baseShip.save().then(() => {
  console.log('ok');
})*/


