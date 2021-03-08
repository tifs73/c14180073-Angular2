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

  alldetail() {
    this.globalvar.data.pop();
  }
}
