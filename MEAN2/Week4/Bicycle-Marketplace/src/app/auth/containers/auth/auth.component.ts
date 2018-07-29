import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, BikeService } from '@shared/services';

import { Bike } from '@marketplace/models';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  bikeOfTheDay: Bike;

  constructor(
    private readonly auth: AuthService,
    private readonly bikeService: BikeService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    if (this.auth.isAuthed()) {
      this.router.navigateByUrl('/browse');
    }

    this.bikeService.getBikes().subscribe(bikes => {

      console.log(bikes);
      this.bikeOfTheDay = bikes[Math.floor(Math.random() * bikes.length)];
    });
  }

}
