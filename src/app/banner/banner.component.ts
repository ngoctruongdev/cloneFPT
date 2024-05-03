import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {
  private index:number = 0;
  private numiter:any;
  private interVal:any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const imgnum = document.querySelectorAll('.imgslider') 
      this.numiter = imgnum.length
      this.startInterval();
    }
  }
  clickbtnright ():void{
    if (isPlatformBrowser(this.platformId)) {
      let sliderContaner = document.querySelector('.slidercontainer') as HTMLElement
      const imgnum = document.querySelectorAll('.imgslider');
      let sliderparagrab = document.querySelector('.paragrab') as HTMLElement
      this.index++
      if(this.index > imgnum.length -1){
        this.index = 0
      }
      let translateValue = `${this.index * -100}%`;
      sliderparagrab.style.transform =`translateX(${translateValue})`;
      sliderContaner.style.transform = `translateX(${translateValue})`;
    }
  }
  clickbtnleft():void{
    if (isPlatformBrowser(this.platformId)) {
      let sliderContaner = document.querySelector('.slidercontainer') as HTMLElement
      const imgnum = document.querySelectorAll('.imgslider');
      let sliderparagrab = document.querySelector('.paragrab') as HTMLElement
      this.index--
      if(this.index < 0 ){
        this.index = imgnum.length -1
      }
      let translateValue = `${this.index * -100}%`;
      sliderparagrab.style.transform =`translateX(${translateValue})`;
      sliderContaner.style.transform = `translateX(${translateValue})`;
    }
  }
  private startInterval(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.interVal = setInterval(() => {
        this.clickbtnright();
      }, 4000);  }
  }
}
