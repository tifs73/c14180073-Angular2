import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(private router: Router) {

  }

  data = new Array(10).fill(0);

  judul: "";
  isi: "";
  tgl: "";

  save() {

  }

  hal2() {
    this.router.navigate(["/detail"]);
  }

  hal3() {
    this.router.navigate(["/favorite"]);
  }
}
