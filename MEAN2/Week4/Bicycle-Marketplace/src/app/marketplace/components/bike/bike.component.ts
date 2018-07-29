import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Bike } from '@marketplace/models';
import { AuthService } from '@shared/services';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css'],
})
export class BikeComponent implements OnInit {
  @Input() bike: Bike;
  @Input() home: boolean;

  @Output() deleteBike = new EventEmitter<Bike>();

  public currUserId: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    if (!this.bike) {
      this.bike = new Bike();
    }
    this.currUserId = this.authService.getUserId();
  }

  onDelete(event: Event) {
    event.preventDefault();
    this.deleteBike.emit(this.bike);
  }
}
