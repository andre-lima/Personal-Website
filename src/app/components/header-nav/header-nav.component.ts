import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  private navLinks = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.navLinks = Object.keys(this.dataService.getData()).filter(item => item !== 'personal');
    console.log(this.navLinks);
  }

}
