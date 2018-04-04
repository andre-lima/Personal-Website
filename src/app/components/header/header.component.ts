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
    this.data = this.dataService.getData();

    this.name = this.data.personal.name;
    this.position = this.data.personal.position;

    this.breakpoint = this.screenService.getCurrentBreakpoint();
  }
}
