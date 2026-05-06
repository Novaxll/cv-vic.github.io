import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { CvViewComponent } from './cv-view.component';
import { CvEditComponent } from './cv-edit.component';

import { Header } from './header/header';
import { Skills } from './skills/skills';
import { WorkExperience } from './work-experience/work-experience';
import { Certificates } from './certificates/certificates';
import { Education } from './education/education';
import { Languages } from './languages/languages';
import { Interests } from './interests/interests';

@NgModule({
  declarations: [
    App, CvViewComponent, CvEditComponent, Header, Skills, WorkExperience, Certificates, Education, Languages, Interests
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }