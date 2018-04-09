import { Injectable } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Injectable()
export class TranslationService {

  private translations: Array<string> = [];
  private currentLanguage: string;

  constructor(private dataService: DataService) { }

  // testTrans() {
  //   let eng = this.dataService.getTranslations('eng');
  //   console.log(eng);
  //   eng.subscribe(data => {
  //     console.log(data);
  //   });
  // }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  setCurrentLanguage(lang: string) {
    this.currentLanguage = lang;
  }

}
