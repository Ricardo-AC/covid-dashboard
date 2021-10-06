import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CountryService} from "./country.service";
import {Country} from '../models/Country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})

export class CountryComponent implements OnInit {

  id: number = 0
  type: string = "";
  country!: Country;
  x: string[] = [];
  y: number[] = [];
  data!: object;
  options!: object;

  constructor(private route: ActivatedRoute, private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getCountry();
  }

  getCountry(): void {
    this.countryService.getCountry(this.id).subscribe((data) => {
      this.country = data
      this.drawChart();
    });
  }

  drawChart() {
    this.country.data.forEach((item) => {
      this.x.push(item.date)
      this.y.push(item.cases)
    })

    this.type = 'line';
    this.data = {
      labels: this.x,
      datasets: [
        {
          label: this.country.name + " cases",
          data: this.y
        }
      ]
    };
    this.options = {
      responsive: true,
      maintainAspectRatio: false
    };
  }

}
