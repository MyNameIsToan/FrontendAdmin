import { NewsComponent } from './component/news/news.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MajorComponent } from './component/major/major.component';
import { ForumComponent } from './component/forum/forum.component';
import { RepliesComponent } from './component/replies/replies.component';
import { UniversitiesComponent } from './component/universities/universities.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewsComponent,
    MajorComponent,
    ForumComponent,
    RepliesComponent,
    UniversitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
