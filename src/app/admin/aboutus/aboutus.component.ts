import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Message, ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  aboutusData: String;
  aboutusId: String;
  msgs: Message[] = [];
  constructor(private apiService: ApiService,
    private messageService: MessageService,
      private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.apiService.getAboutusPageData().subscribe(res => {
      console.log(res);
      this.aboutusData = res.aboutus;
      this.aboutusId = res._id;
    },
    err => {
      console.error(err);
    }
    );
  }

  reset() {
    this.apiService.getAboutusPageData().subscribe(res => {
      console.log(res);

      this.aboutusData = res.contactus;
      this.aboutusId = res._id;
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
        const aboutusData = {
              id : this.aboutusId,
              contactus : data
            };
            this.apiService.sendAboutusPageData(aboutusData).subscribe(
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
