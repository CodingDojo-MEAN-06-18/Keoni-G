import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { Bike } from '@marketplace/models';
import { BikeService, AuthService } from '@shared/services';

@Component({
  selector: 'app-bike-form',
  templateUrl: './bike-form.component.html',
  styleUrls: ['./bike-form.component.css'],
})
export class BikeFormComponent implements OnInit, OnDestroy {
  sub: Subscription;
  errors: Array<string>;
  
  @Input() create: boolean;
  @Input() bike: Bike;

  @Output() deleteBike = new EventEmitter<Bike>();
  @Output() createdBike = new EventEmitter<Bike>();

  constructor(
    private readonly router: Router,
    private readonly bikeService: BikeService,
    private readonly authService: AuthService,
  ) {}

  ngOnInit() {
    if (!this.bike) {
      this.bike = new Bike();
    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    if (this.create) {
      this.bike.ownerId = this.authService.getUserId();
      this.sub = this.bikeService.createBike(this.bike).subscribe(bike => {
        console.log('CREATED BIKE:', bike);
        this.createdBike.emit(bike);
      },
      err => {
        this.errors = err.statusText.errors;
      });
      this.router.navigateByUrl('/listings');
    } else {
      this.sub = this.bikeService.updateBike(this.bike).subscribe(bike => {
        console.log('UPDATED BIKE', bike);
      },
      err => {
        this.errors = err.statusText.errors;
      });
    }
  }

  onDelete(event: Event) {
    event.preventDefault();
    this.deleteBike.emit(this.bike);
  }
}
