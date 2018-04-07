import { Injectable } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Injectable()
export class TranslationService {

  private translations = [];

  constructor(private dataService: DataService) { }

  testTrans() {
    console.log('translation.service.ts')
    let eng = this.dataService.getTranslations('eng');
    console.log(eng);
    eng.subscribe(data => {
      console.log(data);
    });
  }

}
