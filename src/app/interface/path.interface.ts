import { Choice } from "./choice.interface";

export interface Path {
  title: string;
  requirement?: string;
  description: string;
  choices: Choice[];
}

