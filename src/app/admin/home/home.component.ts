import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService, Message } from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeData: String;
  homeId: String;
  msgs: Message[] = [];

  constructor(private apiService: ApiService,
      private messageService: MessageService,
      private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.apiService.getCmsPageData('home').subscribe(res => {
      console.log(res);

      this.homeData = res.content;
      this.homeId = res._id;
    },
      err => {
        console.error(err);
      }
    );
  }

  reset() {
    this.apiService.getCmsPageData('home').subscribe(res => {
      console.log(res);

      this.homeData = res.content;
      this.homeId = res._id;
    },
      err => {
        console.error(err);
      }
    );
  }

  confirm1(data) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Requesting for changing data' }];
        const homeData = {
          id: this.homeId,
          slug : 'home',
          content: data
        };
        this.apiService.sendCmsPageData(homeData).subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.error(err);
          }
        );
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'Data is not changed' }];
      }
    });
  }

}
