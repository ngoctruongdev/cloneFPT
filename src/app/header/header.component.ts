import { Component, Input, input,OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  private _translate: TranslateService

  constructor(translate:TranslateService){
    this._translate = translate
  }
  showMe:boolean = false;
  toogleTag1(){ 
    this.showMe=!this.showMe
  }
  ngOnInit(): void {
    
  }
  changelang(lang:any,){
    const selectLanguage = lang.target.value;
    this._translate.use(selectLanguage)
  }
}

