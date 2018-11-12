import { Component, OnInit } from '@angular/core';
import { ApiuserService } from '../shared/service/apiuser.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  aboutusData: String;
  constructor( private apiService: ApiuserService) { }

  ngOnInit() {
    this.apiService.getCmsPageData('aboutus').subscribe(res => {
      console.log(res);
      this.aboutusData = res.content;
    },
    err => {
      console.error(err);
    }
    );
  }
}
