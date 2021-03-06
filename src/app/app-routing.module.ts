import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BasicComponent } from './basic/basic.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [

  // auth routes

  {
    path : '',
    component : AuthComponent,
    children : [
      {
        path : '',
        redirectTo : '/welcome',
        pathMatch : 'full'
      },
      {
        path : 'welcome',
        loadChildren : () => import('./auth/auth.module').then(module => module.AuthModule)
      }
    ]
  },

  // basic routes

  {
    path : '',
    component : BasicComponent,
    children : [
      {
        path : 'basic',
        redirectTo : '/home',
        pathMatch : 'full'
      },
      {
        path : 'home',
        loadChildren : () => import('./basic/basic.module').then(module => module.BasicModule)
      }
    ]
  },

  // admin routes

  {
    path : '',
    component : AdminComponent,
    children : [
      {
        path : 'admin',
        redirectTo : '/dashboard',
        pathMatch : 'full'
      },
      {
        path : 'dashboard',
        loadChildren : () => import('./admin/admin.module').then(module => module.AdminModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
