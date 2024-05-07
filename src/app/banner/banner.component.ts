import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {
  private index:number = 0;
  private index2:number = 0;
  private numiter:any;
  private numiter2:any;
  private interVal:any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const imgnum = document.querySelectorAll('.imgslider') 
      const imgnum2=document.querySelectorAll('.imgslider2') 
      this.numiter2 = imgnum2.length
      this.numiter = imgnum.length
      this.startInterval();
      this.startInterval2();
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
  
  private startInterval2(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.interVal = setInterval(() => {
          let sliderContaner2 = document.querySelector('.slidercontainer2') as HTMLElement
          const imgnum2 = document.querySelectorAll('.imgslider2');
          let sliderparagrab = document.querySelector('.paragrab2') as HTMLElement
          this.index2++
          if(this.index2 > imgnum2.length -1 ){
            this.index2 = 0;
          }
          let translateValue2 = `${this.index2 * -100}%`;
          sliderparagrab.style.transform =`translateX(${translateValue2})`; 
          sliderContaner2.style.transform = `translateX(${translateValue2})`;
      }, 4000);  }
  }
}
