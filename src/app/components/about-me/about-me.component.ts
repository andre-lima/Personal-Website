import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  private photoSrc: string;
  private title: string;
  private description: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData('about_me')
    .subscribe(data => {
      this.photoSrc = `../../../assets/images/${data.photo}`;
    });
  }

}
