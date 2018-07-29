import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'Bicycle Marketplace';
  public loggedIn: boolean;

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.auth.authorized$.subscribe(authed => (this.loggedIn = authed));
  }
}
