import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryLevelComponent } from 'src/app/modules/entry-level/entry-level.component';
import { InternComponent } from 'src/app/modules/intern/intern.component';
import { DriverComponent } from 'src/app/modules/driver/driver.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionsComponent } from 'src/app/modules/questions/questions.component';
import { EntryLevelQuestionsComponent } from 'src/app/modules/entry-level-questions/entry-level-questions.component';
import { InternQuestionsComponent } from 'src/app/modules/intern-questions/intern-questions.component';
import { DriverQuestionsComponent } from 'src/app/modules/driver-questions/driver-questions.component';
import { NyscComponent } from 'src/app/modules/nysc/nysc.component';
import { NyscQuestionsComponent } from 'src/app/modules/nysc-questions/nysc-questions.component';



@NgModule({
  declarations: [
    UserComponent,
    EntryLevelComponent,
    InternComponent,
    DriverComponent,
    QuestionsComponent,
    EntryLevelQuestionsComponent,
    InternQuestionsComponent,
    DriverQuestionsComponent,
    NyscComponent,
    NyscQuestionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
