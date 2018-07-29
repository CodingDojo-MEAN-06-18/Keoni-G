import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Bike } from '@marketplace/models';
import { BikeService, AuthService } from '@shared/services';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
})
export class BrowseComponent implements OnInit, OnDestroy {
  bikes: Array<Bike> = [];
  sub: Subscription;
  authed: boolean;
  filter: string = "";

  constructor(
    private bikeService: BikeService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.sub = this.bikeService.getBikes().subscribe(bikes => {
      this.bikes = bikes;
    });

    this.auth.authorized$.subscribe(authed => (this.authed = authed));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onDelete(bikeToDelete: Bike) {
    this.bikeService.deleteBike(bikeToDelete).subscribe(deletedBike => {
      console.log('deleted bike', deletedBike);

      this.bikes = this.bikes.filter(bike => bike._id !== deletedBike._id);
    });
  }
}
