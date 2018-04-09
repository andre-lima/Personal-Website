import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { ScreenService } from '../../services/screen/screen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private data;
  private name = '';
  private position = '';
  private breakpoint = '';

  constructor(
    private dataService: DataService,
    private screenService: ScreenService
  ) { }

  ngOnInit() {
    this.dataService.getData('about_me')
    .subscribe(data => {
      this.name = data.name;
      this.position = data.position;
    });

    this.breakpoint = this.screenService.getCurrentBreakpoint();
  }
}