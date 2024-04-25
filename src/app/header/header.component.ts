import { Component, Input, input,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showMe:boolean = false
  showlanguage:boolean=false
  toogleTag1(){
    this.showMe=!this.showMe
  }
  toogleTag2(){
    this.showlanguage=!this.showlanguage
  }
}
