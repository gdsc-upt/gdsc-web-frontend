import { IBase } from './base';

export interface article extends IBase {
  title: string;
  content: string;
  date: Date;
  slug: string;
}
