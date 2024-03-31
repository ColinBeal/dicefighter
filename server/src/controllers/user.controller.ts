// controllers/salary.controller.ts

import { Request, Response } from 'express';
import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { User } from '../models/user.model';

dotenv.config();

export async function createUser(req: Request, res: Response) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    password: hashedPassword
    // Set your other fields here. For example:
    // name: req.body.name,
    // amount: req.body.amount,
  });

  user.save().then(result => {
    console.log(result);
    res.status(201).json(result);
  }).catch(err => {
    res.status(500).json({ error: err });
  });
};

async function login(req: Request, res: Response) {
  // Find user by name
  const user = await User.findOne({ name: req.body.name });
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  // Compare passwords
  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) {
    return res.status(400).json({ message: 'Invalid password' });
  }
  console.log(process.env.SECRET_KEY);
  const token = jwt.sign(
    { name: user.name, id: user._id }, // payload
    process.env.SECRET_KEY ?? 'lol', // secret key
    { expiresIn: '1h' } // options
  );

  // Send the token to the client
  res.status(200).json({ message: 'Logged in successfully', token: token });

}
