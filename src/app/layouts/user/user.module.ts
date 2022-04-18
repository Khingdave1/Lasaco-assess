import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryLevelComponent } from 'src/app/modules/entry-level/entry-level.component';
import { InternComponent } from 'src/app/modules/intern/intern.component';
import { DriverComponent } from 'src/app/modules/driver/driver.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from './user.component';



@NgModule({
  declarations: [
    UserComponent,
    EntryLevelComponent,
    InternComponent,
    DriverComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class UserModule { }
