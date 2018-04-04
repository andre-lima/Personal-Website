import { Injectable } from '@angular/core';
import { breakpoints } from './breakpoints';

@Injectable()
export class ScreenService {

  constructor() { }

  getCurrentBreakpoint(): string {
    let currentBreakpoint = Object.keys(breakpoints)[0];
    const currentWidth = window.innerWidth;

    for (const bp in breakpoints ) {
      if (currentWidth >= breakpoints[bp]) {
        currentBreakpoint = bp;
      }
    }
    return currentBreakpoint;
  }

}
