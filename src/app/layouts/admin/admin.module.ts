import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from 'src/app/modules/admin-login/admin-login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateUserComponent } from 'src/app/modules/create-user/create-user.component';
import { AdminOverviewComponent } from 'src/app/modules/admin-overview/admin-overview.component';
import { UsersComponent } from 'src/app/modules/users/users.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminLoginComponent,
    AdminOverviewComponent,
    CreateUserComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule { }
