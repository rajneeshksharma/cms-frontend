import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/layout/breadcrumb/breadcrumb.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditorModule } from 'primeng/editor';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import { MessageService } from 'primeng/components/common/messageservice';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ConfirmDialogModule,
    ButtonModule,
    EditorModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [AdminComponent, HeaderComponent,
    FooterComponent,
    SidebarComponent, BreadcrumbComponent, AdminhomeComponent, HomeComponent, ContactusComponent, AboutusComponent],
  exports: [
    RouterModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class AdminModule { }
