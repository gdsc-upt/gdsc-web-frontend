import { Base } from './base';

export interface Article extends Base {
  title: string;
  content: string;
  date: Date;
  slug: string;
}
