import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path : '' , component : AdminhomeComponent },
      { path : 'aboutus' , component : AboutusComponent },
      { path : 'contactus' , component : ContactusComponent },
      { path : 'home' , component : HomeComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: []
})
export class AdminRoutingModule { }
