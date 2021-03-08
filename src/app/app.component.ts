import { global } from '@angular/compiler/src/util';
import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarService } from './global-var.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(private router: Router, public globalvar : GlobalVarService) {

  }
  hal1() {
    this.router.navigate(["/input"]);
  }

  hal2() {
    this.router.navigate(["/detail"]);
  }

  hal3() {
    this.router.navigate(["/favorite"]);
  }
}
