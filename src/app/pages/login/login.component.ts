import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  onLogin = (form: NgForm) => {
    console.log(form.value);
    const userCred = {
      email: form.value.email,
      password: form.value.password
    }
    if (form.valid) {
      this.userService.logIn(userCred).subscribe(
        (resp) => {
          localStorage.setItem('token', resp.data.authToken)
          this.router.navigate([''])

          console.log(resp);
        },
        (err) => {
          console.log('SOME ERROR')
          console.log(err);
        }
      );
    }
  }
}
