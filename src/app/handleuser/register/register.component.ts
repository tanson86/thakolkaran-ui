import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userdetails = {username: '', password: '',email: '', mobile: '', notification: true};

  register() {
    // this.app.authenticate(this.credentials, () => {
    //     this.router.navigateByUrl('/');
    // });
     return false;
  }

}
