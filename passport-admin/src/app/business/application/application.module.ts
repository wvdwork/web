import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  { PaginationModule}       from '../../shared/pagination/pagination.module';
import { SelectModule } from 'angular2-select';
import { Select2Module } from 'ng2-select2';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationService } from '../../service/application/application.service';
// import {UserInfoComponent} from "./user-info/user-info.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
// import {UserModifyComponent} from "./user-modify/user-modify.component";




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ApplicationRoutingModule,
    PaginationModule,
    NgbModule,
    SelectModule,
    Select2Module
  ],
  declarations: [
    ApplicationComponent,
    // UserInfoComponent,
    // UserModifyComponent,
    ApplicationListComponent
  ],
  // entryComponents:[UserInfoComponent, UserModifyComponent],
  providers: [
    ApplicationService
  ],
  exports: [
  ]
})
export class ApplicationModule { }
