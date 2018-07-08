import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private url: string = "api.openweathermap.org/data/2.5/weather?q=";
  private apiKey: string = "&units=imperial&APPID=f830c950f54c6ed65d84a57823861928";
  weather$: BehaviorSubject<City> = new BehaviorSubject(new City());

  constructor(private _http: HttpClient) { }

  getCity(location: string) {
    return this._http.get(`//${this.url + location + this.apiKey}`).toPromise()
      .then((location) => {
        const weather = new City(location["name"], location["main"]["humidity"], location["main"]["temp_min"], location["main"]["temp_max"], location["weather"][0]["description"]);
        this.weather$.next(weather);
      })
      .catch((err) => {
        this.weather$.next(err);
      });
  }
}
