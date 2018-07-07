import { Component, OnInit } from '@angular/core';
import { GoldService } from './gold.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  gold: number = 0;

  constructor(private _goldService: GoldService) { }

  ngOnInit() {
    this._goldService.gold$.subscribe( (gold) => {
      this.gold += gold;
    });
  }
}
