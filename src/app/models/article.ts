import { Base } from './base';

export interface article extends Base {
  title: string;
  content: string;
  date: Date;
  slug: string;
}
