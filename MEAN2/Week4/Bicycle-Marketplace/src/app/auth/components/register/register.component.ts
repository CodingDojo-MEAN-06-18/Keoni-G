import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services';
import { User } from '@auth/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  registrationErrors: string[] = [];

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(user: User) {
    this.auth.register(user).subscribe(() => {
      this.router.navigateByUrl('browse');
    });
  }
}
