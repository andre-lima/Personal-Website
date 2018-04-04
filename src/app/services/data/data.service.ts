import { Injectable } from '@angular/core';
import { data } from '../../data';

@Injectable()
export class DataService {

  private data = null;

  constructor() {
    this.data = data;
  }

  getData(): string {
    return this.data;
  }

}
