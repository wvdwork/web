import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule } from '@angular/forms';
import  { PaginationModule}       from '../../shared/pagination/pagination.module';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from '../../service/user/user.service';
import {UserInfoComponent} from "./user-info/user-info.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
// import {UserAddComponent} from "./user-add/user-add.component";




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    PaginationModule,
    NgbModule
  ],
  declarations: [
    UserComponent,
    UserInfoComponent,
    // UserAddComponent,
    UserListComponent
  ],
  entryComponents:[UserInfoComponent],
  providers: [
    UserService
  ],
  exports: [
  ]
})
export class UserModule { }
