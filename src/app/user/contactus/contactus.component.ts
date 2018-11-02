import { Component, OnInit } from '@angular/core';
import { ApiuserService } from '../shared/service/apiuser.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactusData: String;

  constructor(private apiService: ApiuserService) { }

  ngOnInit() {
    this.apiService.getContactusPageData().subscribe(res => {
      console.log(res);
      this.contactusData = res.contactus;
    },
    err => {
      console.error(err);
    }
    );
  }

}
