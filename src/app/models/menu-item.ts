import { Base } from './base';

export interface MenuItem extends Base {
  name: string;
  type: string;
  link: string;
}
