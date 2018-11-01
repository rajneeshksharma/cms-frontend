import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/layout/breadcrumb/breadcrumb.component';

import { RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule
  ],
  declarations: [AdminComponent, HeaderComponent, FooterComponent, SidebarComponent, BreadcrumbComponent, AdminhomeComponent, HomeComponent, ContactusComponent, AboutusComponent],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
