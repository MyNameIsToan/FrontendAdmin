import { MajorComponent } from './component/major/major.component';
import { UniversitiesComponent } from './component/universities/universities.component';
import { RepliesComponent } from './component/replies/replies.component';
import { ForumComponent } from './component/forum/forum.component';
import { NewsComponent } from './component/news/news.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:"login",component: LoginComponent},
  {path:"",component: LoginComponent},
  {path:"news",component: NewsComponent},
  {path:"forum",component: ForumComponent},
  {path:"replies",component: RepliesComponent},
  {path:"universities",component: UniversitiesComponent},
  {path:"major", component: MajorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
