import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  APIkey = '571960c213ad978ff73ac54cef1f2d70';
  URL = 'http://api.openweathermap.org/data/2.5/weather?q=';

  constructor(private http: HttpClient) { }

  getCurrentWeather(city) {
    return this.http.get(this.URL + city + '&APPID=' + this.APIkey);
  }

}


export interface Weather {
    city: string;
    description: string;
    temperature: number;
}
