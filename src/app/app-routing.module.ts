import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { UserComponent } from './layouts/user/user.component';
import { DriverComponent } from './modules/driver/driver.component';
import { EntryLevelComponent } from './modules/entry-level/entry-level.component';
import { HomeComponent } from './modules/home/home.component';
import { InternComponent } from './modules/intern/intern.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Home',
          description: 'Description Meta Tag Content'
        }
      }
    ]
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'entry-level',
        component: EntryLevelComponent,
        data: {
          title: 'Entry Level',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'internship',
        component: InternComponent,
        data: {
          title: 'Internship',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'driver',
        component: DriverComponent,
        data: {
          title: 'driver',
          description: 'Description Meta Tag Content'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
