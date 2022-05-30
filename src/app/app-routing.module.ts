import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { UserComponent } from './layouts/user/user.component';
import { AdminLoginComponent } from './modules/admin-login/admin-login.component';
import { CreateUserComponent } from './modules/create-user/create-user.component';
import { DriverQuestionsComponent } from './modules/driver-questions/driver-questions.component';
import { DriverComponent } from './modules/driver/driver.component';
import { EntryLevelQuestionsComponent } from './modules/entry-level-questions/entry-level-questions.component';
import { EntryLevelComponent } from './modules/entry-level/entry-level.component';
import { HomeComponent } from './modules/home/home.component';
import { InternQuestionsComponent } from './modules/intern-questions/intern-questions.component';
import { InternComponent } from './modules/intern/intern.component';
import { QuestionsComponent } from './modules/questions/questions.component';
import { NyscComponent } from './modules/nysc/nysc.component';
import { NyscQuestionsComponent } from './modules/nysc-questions/nysc-questions.component';
import { AdminOverviewComponent } from './modules/admin-overview/admin-overview.component';
import { UsersComponent } from './modules/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    redirectTo: '',
    pathMatch: 'full',
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
        path: 'nysc',
        component: NyscComponent,
        data: {
          title: 'Nysc',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'driver',
        component: DriverComponent,
        data: {
          title: 'Driver',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'questions',
        component: QuestionsComponent,
        data: {
          title: 'Questions',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'entry-level-questions',
        component: EntryLevelQuestionsComponent,
        data: {
          title: 'Entry Level Questions',
          description: 'Description Meta Tag Content'
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'intern-questions',
        component: InternQuestionsComponent,
        data: {
          title: 'Intern Questions',
          description: 'Description Meta Tag Content'
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'nysc-questions',
        component: NyscQuestionsComponent,
        data: {
          title: 'Nysc Questions',
          description: 'Description Meta Tag Content'
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'driver-questions',
        component: DriverQuestionsComponent,
        data: {
          title: 'Driver Questions',
          description: 'Description Meta Tag Content'
        },
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminLoginComponent,
        data: {
          title: 'Admin Login',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'overview',
        component: AdminOverviewComponent,
        data: {
          title: 'Admin Login',
          description: 'Description Meta Tag Content'
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Users',
          description: 'Description Meta Tag Content'
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'create-user',
        component: CreateUserComponent,
        data: {
          title: 'Create User',
          description: 'Description Meta Tag Content'
        },
        canActivate: [AuthGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
