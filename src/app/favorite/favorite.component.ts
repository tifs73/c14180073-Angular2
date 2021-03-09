import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarService } from '../global-var.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(private router: Router, public globalvar: GlobalVarService) {}

  ngOnInit() {
  }

}