import { Schema, model } from 'mongoose';
import { IUserDocument } from '../interfaces/user.interface';

const UserSchema: Schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  password: { type: String, required: true }
});

export const User = model<IUserDocument>('User', UserSchema);