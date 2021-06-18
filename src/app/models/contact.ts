import { IBase } from './base';

export interface IContact extends IBase {
  name: string;
  email: string;
  subject: string;
  text: string;
}
