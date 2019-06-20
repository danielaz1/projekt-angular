import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { LocationOn } from './location.model';

declare var google: any;

@Injectable()
export class GeocodeService {
  private geocoder: any;

  constructor(private mapLoader: MapsAPILoader) {}

  private initGeocoder() {
    console.log('Init geocoder!');
    this.geocoder = new google.maps.Geocoder();
  }

  private waitForMapsToLoad(): Observable<boolean> {
    if(!this.geocoder) {
      return from(this.mapLoader.load())
      .pipe(
        tap(() => this.initGeocoder()),
        map(() => true)
      );
    }
    return of(true);
  }

  geocodeAddress(location: string): Observable<LocationOn> {
    console.log('Start geocoding!');
    return this.waitForMapsToLoad().pipe(
      switchMap(() => {
        return new Observable<LocationOn>(observer => {
          this.geocoder.geocode({address: location}, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
              console.log('Geocoding complete!');
              observer.next({
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng()
              });
            } else {
                console.log('Error - ', results, ' & Status - ', status);
                observer.next({ lat: 0, lng: 0 });
            }
            observer.complete();
          });
        });
      })
    );
  }

}