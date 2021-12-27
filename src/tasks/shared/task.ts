/* eslint-disable prettier/prettier */
import { Document } from "mongoose";
export class Task extends Document{
  nome: string;
  email: string;
  dataNasc: string;
  tel: number;
  endereco: string;
}
