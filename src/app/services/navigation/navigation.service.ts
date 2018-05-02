import { Injectable } from '@angular/core';
import { config } from '../../config/config';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Injectable()
export class NavigationService {

  private navLinks: string[];
  private initialPage: string;
  private currentActiveSection;

  constructor(private router: Router) {
    this.init();
  }

  init() {
    this.navLinks = config.pages;
    this.currentActiveSection = (location.pathname && location.pathname !== '/') ? (location.pathname).substr(1) : config.pages[0];

    // Replaces active tab when route is changed
    this.router.events
    .subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.currentActiveSection = (event.url && event.url !== '/') ? (event.url).substr(1) : config.pages[0];
      }
    });
  }

  getNavLinks() {
    return this.navLinks;
  }

  getCurrentActiveSection() {
    return this.currentActiveSection;
  }

}
