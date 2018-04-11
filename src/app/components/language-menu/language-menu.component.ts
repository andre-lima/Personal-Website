import { Component, OnInit } from '@angular/core';
import { config } from '../../config/config';
import { TranslationService } from '../../services/translation/translation.service';

@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.scss']
})
export class LanguageMenuComponent implements OnInit {

  private languages: string[];
  private activeLanguage: string;

  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    this.languages = config.supportedLanguages;

    // change this logic to use cookies and browser language
    this.activeLanguage = this.languages[0];
  }

  setActive(event) {
    const chosenLanguage = event.target.dataset.lang;

    this.activeLanguage = chosenLanguage;
    this.translationService.setCurrentLanguage(chosenLanguage);
    console.log(this.translationService.getCurrentLanguage());
  }

}
