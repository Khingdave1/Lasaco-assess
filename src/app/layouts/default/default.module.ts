import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DefaultModule { }
