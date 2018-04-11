import { Injectable } from '@angular/core';
import { config } from '../../config/config';
import { DataService } from '../../services/data/data.service';
import { merge } from 'lodash';

@Injectable()
export class TranslationService {

  private translations = {};
  private supportedLanguages: Array<string> = [];
  private currentLanguage: string;

  constructor(private dataService: DataService) {
    this.supportedLanguages = config.supportedLanguages;
    this.init();
  }

  init() {
    // Fetching translation objects for each supported language
    this.supportedLanguages.forEach(lang => {
      this.dataService.getTranslations(lang)
        .subscribe(
          data => {
            merge(this.translations, data);
          },
          error => {
            console.log('Translation files not found for language: ', lang);
          }
        );
    });

    // TODO: Get this from cookies and/or browser language
    this.setCurrentLanguage('eng');
  }

  getSupportedLanguages() {
    return this.supportedLanguages;
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  setCurrentLanguage(lang: string) {
    this.currentLanguage = lang;
  }

  private translate(key: string): string {
    // private perform translation
    let translation = key + ' [missing translation]';

    if (this.translations[this.currentLanguage] && this.translations[this.currentLanguage][key]) {
        translation = this.translations[this.currentLanguage][key];
    }

    return translation;
  }

  public instant(key: string) {
      // call translation
      return this.translate(key);
  }

}
