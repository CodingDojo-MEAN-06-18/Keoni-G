import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManagerService } from '../../manager.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  positions: string[] = [
    "Forward",
    "Midfielder",
    "Goalkeeper",
    "Sweeper",
    "Stopper",
    "Striker",
    "Back",
  ];
  name: string = "";
  position: string = "";

  constructor(private manager$: ManagerService) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.manager$.addPlayer({
      "name": this.name,
      "preferredPosition": this.position
    });
    form.reset();
  }

}
