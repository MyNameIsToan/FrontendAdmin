import { News } from './../../object/news/news';
import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/object/news/data';
import { NewsService } from 'src/app/service/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  Open!:number;
  ListOfNews!: Data[];
  constructor(private NewsService: NewsService) {
    if(localStorage.getItem('token') == null){
      window.location.href="http://localhost:4100/login";
    }
    this.Open = 0;
  }

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(){
    this.NewsService.GetAll().subscribe(data=>{
      let value = data as News;
      this.ListOfNews = value.data;
      console.log(this.ListOfNews);
    });
  }

  OpenCondition(){
    this.Open = 1;
  }

  CloseCondition(){
    this.Open = 0;
  }
}
