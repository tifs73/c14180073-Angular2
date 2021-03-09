import { Injectable } from "@angular/core";

@Injectable()
export class GlobalVarService {
  public data : any[][];
  public datafav : any[][];

  constructor() {
  this.data = [];
  this.datafav = [];
  }
  
}
