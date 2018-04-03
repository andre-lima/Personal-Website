import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private data;
  private name = '';
  private position = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getData();

    this.name = this.data.personal.name;
    this.position = this.data.personal.position;
  }
}
