import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../../manager.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  current: number = 0;
  players: any[] = [];
  constructor(private activeRoute: ActivatedRoute, private manager$: ManagerService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params) => {
        this.current = parseInt(params["game"]) - 1;
      },
      (error) => {
        console.log(error);
      }
    );
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
  
  
  onClick(event: Event, playerId: string, setValue: number) {
    event.preventDefault();
    this.manager$.updateStatus(playerId, this.current, setValue);
  }
}
