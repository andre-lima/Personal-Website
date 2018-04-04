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

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    const data = this.dataService.getData();

    this.photoSrc = `../../../assets/images/${data.about_me.photo}`;
    this.title = data.about_me.title;
    this.description = data.about_me.description;
  }

}
