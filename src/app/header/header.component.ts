import { Component, Input, input,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  visible:boolean=false
  onClick(){
    this.visible=!this.visible
  }
}
