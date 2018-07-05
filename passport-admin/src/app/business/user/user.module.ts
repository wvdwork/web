import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  { PaginationModule}       from '../../shared/pagination/pagination.module';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from '../../service/user/user.service';
import {UserInfoComponent} from "./user-info/user-info.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {UserModifyComponent} from "./user-modify/user-modify.component";




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    PaginationModule,
    NgbModule
  ],
  declarations: [
    UserComponent,
    UserInfoComponent,
    UserModifyComponent,
    UserListComponent
  ],
  entryComponents:[UserInfoComponent, UserModifyComponent],
  providers: [
    UserService
  ],
  exports: [
  ]
})
export class UserModule { }
