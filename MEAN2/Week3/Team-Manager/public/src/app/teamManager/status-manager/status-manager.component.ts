import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status-manager',
  templateUrl: './status-manager.component.html',
  styleUrls: ['./status-manager.component.css']
})
export class StatusManagerComponent implements OnInit {
  current: number = 1;
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.children[0].params.subscribe(
      (params) => {
        this.current = params["game"];
      },
      (error) => {
        console.log(error);
      });
  }

}
