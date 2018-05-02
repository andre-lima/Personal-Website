import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { ScreenService } from '../../../services/screen/screen.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  private navLinks: string[];
  private currentActiveSection;
  private breakpoint: string;

  constructor(private navigation: NavigationService, private screenService: ScreenService) { }

  ngOnInit() {
    this.navLinks = this.navigation.getNavLinks();
    this.currentActiveSection = this.navigation.getCurrentActiveSection();

    this.breakpoint = this.screenService.getCurrentBreakpoint();
  }

  changeSection() {
    this.currentActiveSection = this.navigation.getCurrentActiveSection();
  }

}
