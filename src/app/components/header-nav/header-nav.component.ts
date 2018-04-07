import { Component, OnInit } from '@angular/core';
import { config } from '../../config/config';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  private navLinks: string[];
  private currentActiveSection;

  constructor() {
    this.currentActiveSection = config.pages[0];
  }

  ngOnInit() {
    this.navLinks = config.pages;
  }

  setActive(event) {
    this.currentActiveSection = event.target.dataset.link;
  }

}
