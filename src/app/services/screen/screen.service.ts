import { Injectable } from '@angular/core';

@Injectable()
export class ScreenService {
  private breakpoints: Object = {
    phone_small: 360,
    phone: 480,
    tablet: 768,
    desktop: 1024,
    desktop_big: 1216
  }

  constructor() { }

  getCurrentBreakpoint(): string {
    let currentBreakpoint = Object.keys(this.breakpoints)[0];
    const currentWidth = window.innerWidth;

    for(let bp in this.breakpoints) {
      if(currentWidth >= this.breakpoints[bp]) {
        currentBreakpoint = bp;
      }
    }
    return currentBreakpoint;
  }

}
