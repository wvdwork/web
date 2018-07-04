import { Component, OnInit,ViewChild} from '@angular/core';
import { AppService } from '../../../app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {HttpPaginationComponent} from '../../../shared/pagination/http-pagination.component';
import { environment } from './../../../../environments/environment';
import {UserInfoComponent} from "../user-info/user-info.component";
// import {UserAddComponent} from "../user-add/user-add.component";

@Component({
  selector: 'c-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {

  @ViewChild('hp', undefined) hp: HttpPaginationComponent;

  url:string = environment.domain + "/fmUser/list";

  param:any = {
    name: 'admin',
    age: 16
  }

  dataList:Array<any>=[

  ]

  pageList:Array<number>= [10, 25, 35]
  size: number = this.pageList[0]

   constructor(private appService: AppService, private ngbModalService: NgbModal) {
    this.appService.titleEventEmitter.emit("用户列表");
  }

  onDataChanged($event){
    this.dataList = $event;
  }

  viewUserInfo (id) {
    const modalRef = this.ngbModalService.open(UserInfoComponent, { size: 'lg'});
    modalRef.componentInstance.userId = id;
  }

  addUser() {
    // const modalRef = this.ngbModalService.open(UserAddComponent, { size: 'lg'});
  }
}
