import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
/**
 * 主页路由
 */
const userRoutes: Routes = [
  { path: '', component: UserComponent ,
    children: [
      {
        path:'userList',
        component:UserListComponent
      },
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
export class UserRoutingModule { }
