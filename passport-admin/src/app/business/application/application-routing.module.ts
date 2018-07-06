import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { ApplicationComponent } from './application.component';
import { ApplicationListComponent } from './application-list/application-list.component';

/**
 * 主页路由
 */
const userRoutes: Routes = [
  { path: '', component: ApplicationComponent ,
    children: [
      {
        path:'applicationList',
        component:ApplicationListComponent
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ApplicationRoutingModule { }
