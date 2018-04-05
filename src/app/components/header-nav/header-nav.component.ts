import { Component, OnInit } from '@angular/core';
import { Config } from '../../config/config';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  private navLinks: string[] = [];
  private config = null;

  constructor() {
    this.config = Config;
  }

  ngOnInit() {
    this.navLinks = this.config.pages;
  }

}
