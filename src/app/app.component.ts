import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  password = '';
  cpassword = '';

  getPIN(pin) {
    console.log(pin);
    if (this.password === '') {
      this.password = pin;
    } else {
      this.cpassword = pin;
      if (this.password === this.cpassword) {
        console.log('Password Verified');
      } else {
        console.log('cpassword is Wrong');
      }
    }
  }
}
