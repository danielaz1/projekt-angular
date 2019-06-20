import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { PersonService, IUser, IAddress } from 'src/services/person.service';
import { Observable } from 'rxjs';
import { AgmCoreModule } from '@agm/core';
import { GeocodeService } from 'src/services/geocode.service';
import { LocationOn } from 'src/services/location.model';
import { WeatherService, Weather } from 'src/services/weather.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  address: string;
  locationOn: LocationOn;
  loading: boolean;
  id: number;
  user: IUser;

  weather: Weather;

  person$: Observable<IUser>;

  constructor(
    private geocodeService: GeocodeService,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.person$ = this.route.paramMap.pipe(
      map((params: ParamMap) =>
        this.personService.getPerson(+params.get('id')))
    );

    this.person$.subscribe((user: IUser) => {
      this.user = user;
      this.address = this.user.address.city + ' ' + this.user.address.street + ' ' + this.user.address.number;
    });
    this.showLocation();
  }

  showWeather() {
    this.weatherService.getCurrentWeather(this.user.address.city)
    .subscribe((res: Weather) => {
       this.weather = res;
       console.log(res);
      });
  }

  showLocation() {
    this.addressToCoordinates();
    this.user.address.city = this.address.split(' ')[0];
    this.user.address.street = this.address.split(' ')[1];
    this.user.address.number = this.address.split(' ')[2];

    this.personService.updatePerson(this.user);
    this.showWeather();
  }

  addressToCoordinates() {
    this.loading = true;
    this.geocodeService.geocodeAddress(this.address)
    .subscribe((locationOn: LocationOn) => {
        this.locationOn = locationOn;
        this.loading = false;
        this.ref.detectChanges();
      }
    );
    console.log(this.locationOn);
  }

}
