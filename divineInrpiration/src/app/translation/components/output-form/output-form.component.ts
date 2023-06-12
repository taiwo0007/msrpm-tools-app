import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-output-form',
  templateUrl: './output-form.component.html',
  styleUrls: ['./output-form.component.css']
})
export class OutputFormComponent implements OnInit {

  @Input() label: string | undefined;
  @Input() translatedTexts: any[] = [];
  @Input() language: string = "";
  @Input() isBold: boolean = false;
  copied: boolean = false;
  formattedText: string = ""


  constructor() {
  }

  ngOnInit(): void {


    if (this.isBold) {

      if (this.language === "french") {
        this.formattedText = this.compileFrenchBold()
        return;
      }
      this.formattedText = this.compileEnglishBold()

      return;
    }

    if (this.language === "french") {
      this.formattedText = this.compileFrench()
      return;
    }

    this.formattedText = this.compileEnglish()


  }

  compileFrench(): string {

    const prefix = "L'ÉVANGILE DE L'APÔTRE EMMANUEL OSEZELE\n\nMSRPM INSPIRATION DIVINE QUOTIDIENNE\n\n";
    const suffix = `Pour en savoir plus sur l'Inspiration Divine Quotidienne, visitez notre site web www.msrpm.org\n\nVisitez nos chaînes YouTube pour plus de messages non dilués de fin des temps:\n\n1. Chaîne de vérité vivante\n2. Apostle Emmanuel Osezele MSRPM\n3. Solution and Redemption Channel\n\nTél. +4915211334015\n\nJoignez-vous au ministère en direct sur Facebook: https://www.facebook.com/msrpm.worldwideinc\n\nRegardez les messages de Watchman Emmanuel Osezele sur Facebook: http://www.facebook.com/Apostle.obazele\n\nConnectez-vous avec nous sur Zoom: cliquez sur le lien suivant: https://zoom.us/j/325627224\n\nVous êtes les bienvenus dans l'une des branches MSRPM la plus proche de chez vous.`;

    for (let text of this.translatedTexts) {
      if (text?.translatedText.trim() !== '') {
        this.formattedText += text?.translatedText + "\n\n";
      }
    }

    return `${prefix}${this.formattedText}${suffix}`;


  }

  compileFrenchBold(): string {

    const prefix = "*L'ÉVANGILE DE L'APÔTRE EMMANUEL OSEZELE*\n\n*MSRPM INSPIRATION DIVINE QUOTIDIENNE*\n\n";
    const suffix = `*Pour en savoir plus sur l'Inspiration Divine Quotidienne, visitez notre site web www.msrpm.org*\n\n*Visitez nos chaînes YouTube pour plus de messages non dilués de fin des temps:*\n\n*1. Chaîne de vérité vivante*\n*2. Apostle Emmanuel Osezele MSRPM*\n*3. Solution and Redemption Channel*\n\n*Tél. +4915211334015*\n\n*Joignez-vous au ministère en direct sur Facebook: https://www.facebook.com/msrpm.worldwideinc*\n\n*Regardez les messages de Watchman Emmanuel Osezele sur Facebook: http://www.facebook.com/Apostle.obazele*\n\n*Connectez-vous avec nous sur Zoom: cliquez sur le lien suivant: https://zoom.us/j/325627224*\n\n*Vous êtes les bienvenus dans l'une des branches MSRPM la plus proche de chez vous.*`;

    for (let text of this.translatedTexts) {
      console.log(text?.translatedText)
      if (text?.translatedText.trim() !== '') {
        this.formattedText += `*${text?.translatedText}*` + "\n\n";
      }
    }

    return `${prefix}${this.formattedText}${suffix}`;


  }


  compileEnglish() {
    const prefix = "APOSTLE EMMANUEL OSEZELE’S GOSPEL OUTREACH\n\nMSRPM DAILY DIVINE INSPIRATION\n\n";
    const suffix = `More about Daily Divine Inspiration www.msrpm.org\n\nVisit our YouTube channels for more undiluted end-time messages:\n\n1. Living Truth Channel\n2. Apostle Emmanuel Osezele MSRPM \n3. Solution and Redemption Channel\n\nTel. +4915211334015\n\nJoin the Ministry Live on Facebook: https://www.facebook.com/msrpm.worldwideinc\n\nhttp://www.facebook.com/Apostle.obazele\n\nConnect with us on zoom:click on the link: https://zoom.us/j/325627224\n\nPlease, you could worship with us online or at any of the MSRPM branches nearest to you, and you will surely be blessed when you do, in Jesus Christ’s Mighty name. Amen.`;


    for (let text of this.translatedTexts) {
      console.log(text?.translatedText)
      if (text !== '') {
        this.formattedText += `${text}` + "\n\n";
      }
    }

    return `${prefix}${this.formattedText}${suffix}`;
  }

  compileEnglishBold() {
    const prefix = "*APOSTLE EMMANUEL OSEZELE’S GOSPEL OUTREACH*\n\n*MSRPM DAILY DIVINE INSPIRATION*\n\n";
    const suffix = `*More about Daily Divine Inspiration www.msrpm.org*\n\n*Visit our YouTube channels for more undiluted end-time messages:*\n\n*1. Living Truth Channel*\n*2. Apostle Emmanuel Osezele MSRPM*\n*3. Solution and Redemption Channel*\n\n*Tel. +4915211334015*\n\n*Join the Ministry Live on Facebook: https://www.facebook.com/msrpm.worldwideinc*\n\n*http://www.facebook.com/Apostle.obazele*\n\n*Connect with us on zoom:click on the link: https//zoom.us/j/325627224*\n\n*Please, you could worship with us online or at any of the MSRPM branches nearest to you, and you will surely be blessed when you do, in Jesus Christ’s Mighty name. Amen.*`;


    for (let text of this.translatedTexts) {
      console.log(text?.translatedText)
      if (text !== '') {
        this.formattedText += `*${text}*` + "\n\n";
      }
    }

    return `${prefix}${this.formattedText}${suffix}`;
  }

  copyToClipboard(textarea: HTMLTextAreaElement) {
    this.copied = true;

    setTimeout(() =>{
      this.copied = false;
    }, 4000)
    const range = document.createRange();
    range.selectNodeContents(textarea);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
    document.execCommand('copy');
    selection?.removeAllRanges();
  }
}
