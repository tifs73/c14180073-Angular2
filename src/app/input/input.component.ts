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
    // this.globalvar.setJudul(this.judul);
    // this.globalvar.setIsi(this.isi);
    // this.globalvar.setTgl(this.tgl);
    var datanote = [];
    datanote[0] = this.judul.toString();
    console.log(this.globalvar.data);
    datanote[1] = this.isi.toString();
    datanote[2] = this.tgl.toString();
    this.globalvar.data.push(datanote);
  }
}
