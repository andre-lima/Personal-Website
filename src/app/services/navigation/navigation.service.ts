import { Injectable } from '@angular/core';
import { config } from '../../config/config';
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {

  private navLinks: string[];
  private currentActiveSection;

  constructor(private router: Router) {
    this.init();
  }

  init() {
    this.navLinks = config.pages;

    // Replaces active tab when route is changed
    this.router.events
    .subscribe((event: any) => {
      this.currentActiveSection = (event.url && event.url !== '/') ? (event.url).substr(1) : config.pages[0];
    });
  }

  getNavLinks() {
    return this.navLinks;
  }

  getCurrentActiveSection() {
    return this.currentActiveSection;
  }

}
