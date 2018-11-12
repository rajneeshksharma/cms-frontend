import { Component, OnInit } from '@angular/core';
import { ApiuserService } from '../shared/service/apiuser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeData: String;
  constructor(private apiService: ApiuserService ) { }

  ngOnInit() {
    this.apiService.getCmsPageData('home').subscribe(res => {
      console.log(res);
      this.homeData = res.content;
    },
    err => {
      console.error(err);
    }
    );
  }

}
