import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalVarService } from "../global-var.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  constructor(private router: Router, public globalvar: GlobalVarService) {}

  ngOnInit() {}

  judul = "";
  isi = "";
  tgl = "";

  save() {
    var datanote = [];
    datanote[1] = this.judul.toString();
    datanote[2] = this.isi.toString();
    datanote[3] = this.tgl.toString();
    this.globalvar.data.push(datanote);
  }
}
