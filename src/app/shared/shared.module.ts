import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ConfirmSubmitComponent } from './components/confirm-submit/confirm-submit.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ConfirmSubmitComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ConfirmSubmitComponent,
  ]
})
export class SharedModule { }
