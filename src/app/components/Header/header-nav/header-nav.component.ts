import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/navigation/navigation.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  private navLinks: string[];
  private currentActiveSection;

  constructor(private navigation: NavigationService) { }

  ngOnInit() {
    this.navLinks = this.navigation.getNavLinks();
    this.currentActiveSection = this.navigation.getCurrentActiveSection();
  }

  changeSection() {
    this.currentActiveSection = this.navigation.getCurrentActiveSection();
  }

}
