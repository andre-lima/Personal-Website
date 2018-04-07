import { Component, OnInit } from '@angular/core';
import { config } from '../../config/config';

@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.scss']
})
export class LanguageMenuComponent implements OnInit {

  private languages: string[];

  constructor() { }

  ngOnInit() {
    this.languages = config.supportedLanguages;
  }

  setActive(event) {

  }

}
