import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GoogleObj} from "../models/GoogleObj.interface";

@Injectable({
  providedIn: 'root'
})
export class GoogletranslateService {

  url = "https://translation.googleapis.com/language/translate/v2?key=";
  key:string ="AIzaSyBpEjgxDCZGGs8oFk0SoKu22IrGhDywjOg"

  constructor(private http: HttpClient) { }
  translate(obj: GoogleObj) {
    return this.http.post(this.url + this.key, obj);
  }
}
