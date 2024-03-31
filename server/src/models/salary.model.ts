import { Schema, model } from 'mongoose';
import { ISalary } from '../interfaces/salary.interface';

const SalarySchema: Schema = new Schema({
  _id: Schema.Types.ObjectId,
  value: { type: Number, required: true },
  // Define your other fields here. For example:
  // name: { type: String, required: true },
  // amount: { type: Number, required: true },
});

export const Salary = model<ISalary>('Salary', SalarySchema);