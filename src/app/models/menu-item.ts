import { IBase } from './base';

export interface IMenuItem extends IBase {
  name: string;
  type: string;
  link: string;
}
