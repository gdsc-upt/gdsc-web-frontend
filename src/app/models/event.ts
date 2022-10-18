import { IBase } from './base';

export interface IEvent extends IBase {
  title: string;
  start_date: string;
  end_date: string;
  url: string;
}
