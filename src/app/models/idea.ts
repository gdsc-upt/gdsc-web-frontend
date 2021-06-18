import { IBase } from './base';

export interface IIdea extends IBase {
  name: string;
  email: string;
  branch: string;
  year: number;
  description: string;
}
