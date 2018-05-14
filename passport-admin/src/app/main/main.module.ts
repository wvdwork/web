import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { Routes, RouterModule} from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import  { UserSharedModule }       from '../business-shared/user/user-shared.module';
import  { CustomScrollbarModule}       from '../shared/custom-scrollbar/custom-scrollbar.module';
import  { ModalModule}            from '../shared/modal/modal.module';
//
import { MainComponent }   from './main.component';
// import { TreeviewMenuComponent }   from './treeview-menu.component';



import { MainRoutingModule } from './main-routing.module';
import { LeftSidebarMenuComponent } from '../common/leftside/sidebar-menu.component'
import { SiderbarTreeviewMenuComponent } from '../common/leftside/treeview-menu.component'

/**
 * 主体模块
 */
@NgModule({
  imports:      [
     CommonModule,
     FormsModule,
     NgbModule,
     MainRoutingModule,
     // UserSharedModule,
     CustomScrollbarModule,
     ModalModule
  ],
  declarations: [
     MainComponent,
     LeftSidebarMenuComponent,
    SiderbarTreeviewMenuComponent
     // SidebarMenuComponent,
     // TreeviewMenuComponent
  ],
  exports:      [],
  providers:    []
})
export class MainModule {
}
