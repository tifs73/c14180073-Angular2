import { Injectable } from "@angular/core";

@Injectable()
export class GlobalVarService {
  public data : any[][];
  private datajudul: string;
  private dataisi: string;
  private datatgl: string;

  constructor() {
  this.data = [];
  }

  public setJudul(judul: string) {
    this.datajudul = judul;
  }

  public getJudul() {
    return this.datajudul;
  }

  public setIsi(isi: string) {
    this.dataisi = isi;
  }

  public getIsi() {
    return this.dataisi;
  }

  public setTgl(tgl: string) {
    this.datatgl = tgl;
  }

  public getTgl() {
    return this.datatgl;
  }
  
}
