import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Country} from '../models/Country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  url: string = environment.api;

  constructor(private http: HttpClient) {
  }

  getCountry(id: number) {
    return this.http.get<Country>(this.url + id);
  }
}
