import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalVarService } from "../global-var.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  constructor(private router: Router, public globalvar: GlobalVarService) {}

  ngOnInit() {}

  fav(i) {
    for (var j = 0; j < this.globalvar.data.length; j++) {
      if (this.globalvar.data[j] == this.globalvar.data[i]) {
        this.globalvar.datafav.push(this.globalvar.data[i]);
      }
    }
  }
}
