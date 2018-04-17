import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { DataService } from './services/data/data.service';
import { ScreenService } from './services/screen/screen.service';
import { TranslationService } from './services/translation/translation.service';
import { TranslatePipe } from './pipes/translate/translate.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/header/header.component';
import { LogoComponent } from './components/Header/logo/logo.component';
import { HeaderNavComponent } from './components/Header/header-nav/header-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { LanguageMenuComponent } from './components/Header/language-menu/language-menu.component';
import { BurgerNavComponent } from './components/Header/burger-nav/burger-nav.component';

const appRoutes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', component: AboutMeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    HeaderComponent,
    LogoComponent,
    HeaderNavComponent,
    AboutMeComponent,
    FooterComponent,
    ContentComponent,
    ProjectsComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    LanguageMenuComponent,
    BurgerNavComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    ScreenService,
    TranslationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
