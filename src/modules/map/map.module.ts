import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { GeocodeService } from 'src/services/geocode.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherService } from 'src/services/weather.service';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: MapComponent }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'key'
    })  ],
    providers: [GeocodeService, WeatherService]
})
export class MapModule {
}
