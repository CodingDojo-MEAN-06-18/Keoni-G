import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Bike } from '@marketplace/models';

import { BikeService, AuthService } from '@shared/services';

import { TitleizePipe } from '@shared/pipes';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  bikes: Array<Bike> = [];
  sub: Subscription;
  authed: boolean;

  selectedBike: Bike;

  constructor(
    private bikeService: BikeService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.sub = this.bikeService.getBikes().subscribe(bikes => {
      let id = this.auth.getUserId();
      this.bikes = bikes.filter(bike => bike.ownerId === id);
    });

    this.auth.authorized$.subscribe(authed => (this.authed = authed));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onCreate(event: Event, bike: Bike) {
    event.preventDefault();
    this.bikes.push(bike);
  }
  onDelete(bikeToDelete: Bike) {
    this.bikeService.deleteBike(bikeToDelete).subscribe(deletedBike => {
      console.log('deleted bike', deletedBike);

      this.bikes = this.bikes.filter(bike => bike._id !== deletedBike._id);
    });
  }
}
