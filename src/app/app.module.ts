import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';

import { DataService } from './services/data/data.service';
import { ScreenService } from './services/screen/screen.service';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    HeaderNavComponent,
    AboutMeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DataService,
    ScreenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
