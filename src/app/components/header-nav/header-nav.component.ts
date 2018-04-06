import { Component, OnInit } from '@angular/core';
import { Config } from '../../config/config';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  private navLinks: string[] = [];
  private config;
  private currentActive;

  constructor() {
    this.config = Config;
    this.currentActive = this.config.pages[0];
  }

  ngOnInit() {
    this.navLinks = this.config.pages;
  }

  setActive(event) {
    this.currentActive = event.target.dataset.link;
  }

}
