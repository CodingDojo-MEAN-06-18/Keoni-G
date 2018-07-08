import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private _weatherService: WeatherService) {}

  getCity(event, location) {
    event.preventDefault();
    this._weatherService.getCity(location);
  }
}
