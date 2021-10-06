import { Component, OnInit } from '@angular/core';
import {Country} from '../models/Country.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public countries: Country[]=[];

  constructor(public homeService:HomeService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    this.homeService.getCountries().subscribe(data => this.countries = data)
  }
}
