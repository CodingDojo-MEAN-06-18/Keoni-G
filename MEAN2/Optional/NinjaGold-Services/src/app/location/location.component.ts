import { Component, OnInit, Input } from '@angular/core';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @Input() start: number;
  @Input() end: number;
  @Input() location: string;

  constructor(private _goldService: GoldService) { }

  ngOnInit() {
  }

  loot(event) {
    event.preventDefault();
    this._goldService.loot(this.start, this.end, this.location);
  }
}
