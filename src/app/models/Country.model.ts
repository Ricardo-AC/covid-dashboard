import {Data} from "./Data.model";

export class Country {
  id: number
  flag_url: string
  name: string;
  data: Data[];

  constructor(id: number, flag_url: string, name: string, data: Data[]) {
    this.id = id;
    this.flag_url = flag_url;
    this.name = name;
    this.data = data;
  }
}
