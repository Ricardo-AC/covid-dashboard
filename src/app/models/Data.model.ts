export class Data {

  date: string;
  cases: number;
  deaths: number;
  recovered: number


  constructor(date: string, cases: number, deaths: number, recovered: number) {
    this.date = date;
    this.cases = cases;
    this.deaths = deaths;
    this.recovered = recovered;

  }

}
