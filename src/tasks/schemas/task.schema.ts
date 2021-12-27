/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  id: Number,
  nome: String,
  email: String,
  dataNasc: String,
  tel: Number,
  endereco: String
})