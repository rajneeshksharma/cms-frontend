import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Message, MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactusData: String;
  constactusId: String;
  msgs: Message[] = [];
  constructor(private apiService: ApiService,
    private messageService: MessageService,
      private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.apiService.getCmsPageData('contactus').subscribe(res => {
      console.log(res);
      this.contactusData = res.content;
      this.constactusId = res._id;
    },
    err => {
      console.error(err);
    }
    );
  }

  reset() {
    this.apiService.getCmsPageData('contactus').subscribe(res => {
      console.log(res);

      this.contactusData = res.content;
      this.constactusId = res._id;
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
        const contactusData = {
              id : this.constactusId,
              slug : 'contactus',
              content : data
            };
            this.apiService.sendCmsPageData(contactusData).subscribe(
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
