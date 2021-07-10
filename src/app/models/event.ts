import { IBase } from './base';

export interface IEvent extends IBase {
  title: string;
  description: string;
  image: string;
  status: string;
  start: Date;
  end: Date;
  rsvp_link: string;
}
