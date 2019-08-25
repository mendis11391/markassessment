import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  status: boolean;
  loginType: string;
  token: string;
  submitted = false;
  loginStatus = false;
  loader = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private route: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      uname: ['', Validators.required],
      pwd: ['', Validators.required]
    });
  }

  validateUser() {
    if (this.loginForm.valid) {
      this.auth.getUserData(this.loginForm.value).subscribe((response) => {
        console.log(response);
        this.status = response.success;
        this.loginType = response.usertype;
        this.token = response.token;

        this.auth.setLoginStatus(this.status, this.loginType, this.token);

        if (this.auth.loggedInStatus) {
          this.loader = false;
          if (this.auth.loginType === 'suLogin') {
            this.route.navigate(['/admin']);
          } else {
            this.route.navigate(['/assessment']);
          }

        } else {
          this.loginStatus = true;
          this.loader = false;
        }
      });
    }
  }

}
