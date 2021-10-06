import {Injectable} from '@angular/core';
import {Country} from '../models/Country.model';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root',
})
export class HomeService {

  constructor(private http: HttpClient) {
  }

  url: string = environment.api;


  getCountries() {
    return this.http.get<Country[]>(this.url);
  }
}
