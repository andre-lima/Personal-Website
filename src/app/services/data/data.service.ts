import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AboutMe, Contact, Skills, Experience, Projects } from './data.interfaces';

@Injectable()
export class DataService {

  private dataUrl = 'assets/data/content/';

  constructor(private http: HttpClient) {
  }

  getData(key: string) {
    const url = this.dataUrl + key + '.json';
    return this.http.get<AboutMe & Contact & Skills & Experience & Projects>(url);
  }

}
