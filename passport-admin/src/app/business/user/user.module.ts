import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule } from '@angular/forms';
import  { PaginationModule}       from '../../shared/pagination/pagination.module';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
// import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserInfoComponent} from "./user-info/user-info.component";
// import {UserInfoModule} from "./user-info/user-info.module";




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    PaginationModule,
    // UserInfoModule
  ],
  declarations: [
    UserComponent,
    // UserAddComponent,
    UserListComponent
  ],
  entryComponents:[],
  exports: [
  ],
  providers: []
})
export class UserModule { }
