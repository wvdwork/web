import { Component, OnInit,ViewChild} from '@angular/core';
import { AppService } from '../../../app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {HttpPaginationComponent} from '../../../shared/pagination/http-pagination.component';
import { environment } from './../../../../environments/environment';
import {UserInfoComponent} from "../user-info/user-info.component";
import {UserModifyComponent} from "../user-modify/user-modify.component";
import {HttpService} from "../../../shared/http/http.service";
import {UserService} from "../../../service/user/user.service";
import {ToastService} from "../../../shared/toast/toast.service";
import {ToastConfig, ToastType} from "../../../shared/toast/toast-model";
import {FormGroup, FormControl, FormBuilder} from "@angular/forms";
// import {UserAddComponent} from "../user-modify/user-modify.component";

@Component({
  selector: 'c-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {

  @ViewChild('hp', undefined) hp: HttpPaginationComponent;

  userSearchForm: FormGroup;

  url:string = environment.domain + "/fmUser/list";

  param: any = {
  }

  dataList:Array<any>=[

  ]

  pageList:Array<number>= [10, 25, 35]
  size: number = this.pageList[0]

   constructor(
     private appService: AppService,
     private ngbModalService: NgbModal,
     private httpService: HttpService,
     public userService: UserService,
     private toastService: ToastService,
     private formBuilder: FormBuilder
   ) {
    this.appService.titleEventEmitter.emit("用户列表");

     this.userSearchForm=this.formBuilder.group({
       userName: '',
       userAccount: ''
     });
  }

  onDataChanged($event){
    this.dataList = $event;
  }

  search() {
    if (this.userSearchForm.controls["userName"].value != null) {
      this.param.userName = this.userSearchForm.controls["userName"].value;
    }
    if (this.userSearchForm.controls["userAccount"].value != null) {
      this.param.userAccount = this.userSearchForm.controls["userAccount"].value;
    }
    this.hp.search();
  }

  viewUserInfo (id) {
    const modalRef = this.ngbModalService.open(UserInfoComponent, { size: 'lg'});
    modalRef.componentInstance.userId = id;
  }

  addUser() {
    const modalRef = this.ngbModalService.open(UserModifyComponent, { size: 'lg'}).result.then((result) => {
    }, (reason) => {
      this.hp.search();
    });
  }

  updateUser(id) {
    const modalRef = this.ngbModalService.open(UserModifyComponent, { size: 'lg'});
    modalRef.componentInstance.userId = id;
    modalRef.componentInstance.operation = 'update';

    modalRef.result.then((result) => {
    }, (reason) => {
      this.hp.search();
    });
  }

  delUser(id) {
    this.httpService.post(this.userService.delUserInfo(id), {}, (successful, data, res) => {
      const toastCfg = new ToastConfig(ToastType.SUCCESS, '用户删除成功', '', 3000);
      this.toastService.toast(toastCfg)
      this.hp.search();
    }, function (successful, msg, err) {
      const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
    });
  }
}
