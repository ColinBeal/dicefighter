// controllers/salary.controller.ts

import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Salary } from '../models/salary.model';

export const createSalary = (req: Request, res: Response) => {
  const salary = new Salary({
    _id: new mongoose.Types.ObjectId(),
    value: req.body.value,
    // Set your other fields here. For example:
    // name: req.body.name,
    // amount: req.body.amount,
  });

  salary.save().then(result => {
    res.status(201).json(result);
  }).catch(err => {
    res.status(500).json({ error: err });
  });
};


export const findSalaries = (req: Request, res: Response) => {
  Salary.find().then(result => {
    res.status(200).json(result);
  }).catch(err => {
    res.status(500).json({ error: err });
  });
}