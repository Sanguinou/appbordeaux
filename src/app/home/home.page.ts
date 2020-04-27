import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loginForm: any;
  registerForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      loginEmail: new FormControl('', [Validators.required, Validators.email]),
      loginPassword: new FormControl('', Validators.required),
    });
    this.registerForm = new FormGroup({
      registerEmail: new FormControl('', [Validators.required, Validators.email]),
      registerPassword: new FormControl('', Validators.required),
      registerName: new FormControl('', Validators.required),
      registerCheck: new FormControl('', Validators.required)
    });
  }

  segmentClass() {
    var elementLogin = <HTMLElement>document.getElementById("login");
    var elementRegister = <HTMLElement>document.getElementById("register");

    elementLogin.classList.toggle("invisible");
    elementRegister.classList.toggle("invisible");
  }

  login() {
    console.log("yes");
  }

  register() {
    console.log("no");
  }

}
