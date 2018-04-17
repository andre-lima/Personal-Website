import { Component, OnInit } from '@angular/core';
import { config } from '../../../config/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  private navLinks: string[];
  private currentActiveSection;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.navLinks = config.pages;

    // Replaces active tab when route is changed
    this.router.events
    .subscribe((event: any) => {
      this.currentActiveSection = (event.url && event.url !== '/') ? (event.url).substr(1) : config.pages[0];
    });
  }

}
