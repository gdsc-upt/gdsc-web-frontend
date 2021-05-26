import { IBase } from './base';

export interface IArticle extends IBase {
  title: string;
  content: string;
  date: Date;
  slug: string;
}
