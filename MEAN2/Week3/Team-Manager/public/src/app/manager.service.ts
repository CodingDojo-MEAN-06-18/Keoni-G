import { Injectable } from '@angular/core';
import { RequestOptions, Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  public players: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: Http) { }

  getPlayers() {
    return this._http.get('/api/players').subscribe(
      (response) => {
        this.players.next(response.json());
      },
      (error) => {
        console.log("Error getting players");
      }
    )
  }

  addPlayer(player) {
    return this._http.post('/api/players', player).subscribe(
      (response) => {
        this.getPlayers();
      },
      (error) => {
        console.log("Error adding player", error);
      }
    )
  }
  
  deletePlayer(id) {
    return this._http.delete('/api/players', new RequestOptions({ body: { "id": id } })).subscribe(
      (response) => {
        this.getPlayers();
      },
      (error) => {
        console.log("Error deleting player");
      }
    )
  }

  updateStatus(id, game, value) {
    return this._http.put('/api/players', { "id": id, "game": game, "setValue": value }).subscribe(
      (response) => {
        this.getPlayers();
      },
      (error) => {
        console.log("Error updating player");
      }
    )
  }
}
