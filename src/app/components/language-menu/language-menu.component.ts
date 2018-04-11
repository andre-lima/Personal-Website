import { Component, OnInit } from '@angular/core';
// import { config } from '../../config/config';
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
    this.languages = this.translationService.getSupportedLanguages();
    this.activeLanguage = this.translationService.getCurrentLanguage();
  }

  setActive(event) {
    const chosenLanguage = event.target.dataset.lang;

    this.activeLanguage = chosenLanguage;
    this.translationService.setCurrentLanguage(chosenLanguage);
    console.log(this.translationService.getCurrentLanguage());
  }

}
