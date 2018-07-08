import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: Object;
  picture: string;

  constructor(private route: ActivatedRoute, private _weatherService: WeatherService) { }

  ngOnInit() {
    this._weatherService.weather$.subscribe(
      (weather) => {
        this.weather = weather.getCity();
        this.picture = this.route.params["_value"]["location"];
      },
      (err) => {
        this.weather = err;
      });
  }
  
}
