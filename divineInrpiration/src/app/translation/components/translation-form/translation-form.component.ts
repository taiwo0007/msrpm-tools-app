import {Component, OnInit, ViewChild} from '@angular/core';
import {GoogletranslateService} from "../../services/googletranslate.service";
import {NgForm} from "@angular/forms";
import {GoogleObj} from "../../models/GoogleObj.interface";

@Component({
  selector: 'app-translation-form',
  templateUrl: './translation-form.component.html',
  styleUrls: ['./translation-form.component.css']
})
export class TranslationFormComponent implements OnInit {
  @ViewChild('TranslateForm', {static: false}) TranslateForm: NgForm | undefined;
  translateObj: GoogleObj = {
    q: [""],
    target: "fr"
  }
  translatedTexts: any = []

  constructor(private googleService: GoogletranslateService) {
  }


  ngOnInit(): void {
  }

  onSubmit(TranslateForm: NgForm) {

    if (TranslateForm.invalid) {
      console.log("Not valid")
      return;
    }

    console.log(TranslateForm.value)

    let englishInputList = TranslateForm.value.englishInput.split("\n");

    for (let l of englishInputList) {
      if (l.trim() !== '') {
        this.translateObj.q.push(l)
      }
    }

    console.log("this.translateObj.q",this.translateObj.q)

    this.translateData()

  }

  translateData() {
    this.googleService.translate(this.translateObj).subscribe((data: any) => {
      this.translatedTexts = data.data.translations;

      console.log(this.translatedTexts)

    }, (error) => {
      console.log(error)
    })


  }
}
