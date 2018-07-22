import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../manager.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  
  players: any[] = [];
  currentPlayer: string = "";

  constructor(private manager$: ManagerService) { }

  ngOnInit() {
    this.manager$.players.subscribe(
      (players) => {
        this.players = players;
      },
      (error) => {
        console.log(error);
      }
    );
    this.manager$.getPlayers();
  }

  openModal(event: Event, player) {
    event.preventDefault();
    this.currentPlayer = player;
  }

  deletePlayer(event: Event, id) {
    event.preventDefault();
    this.manager$.deletePlayer(id);
  }

}
