import { Component, OnInit } from '@angular/core';
import {GoogletranslateService} from "../../services/googletranslate.service";

@Component({
  selector: 'app-translation-form',
  templateUrl: './translation-form.component.html',
  styleUrls: ['./translation-form.component.css']
})
export class TranslationFormComponent implements OnInit {



  constructor(private googleService:GoogletranslateService) { }



  ngOnInit(): void {
  }

}
