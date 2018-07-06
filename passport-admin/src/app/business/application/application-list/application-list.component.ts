import { Component, OnInit,ViewChild} from '@angular/core';
import { AppService } from '../../../app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {HttpPaginationComponent} from '../../../shared/pagination/http-pagination.component';
import { environment } from './../../../../environments/environment';
// import {UserInfoComponent} from "../user-info/user-info.component";
// import {UserModifyComponent} from "../user-modify/user-modify.component";
import {HttpService} from "../../../shared/http/http.service";
import {ApplicationService} from "../../../service/application/application.service";
import {ToastService} from "../../../shared/toast/toast.service";
import {ToastConfig, ToastType} from "../../../shared/toast/toast-model";
// import {UserAddComponent} from "../user-modify/user-modify.component";

@Component({
  selector: 'c-user-list',
  templateUrl: './application-list.component.html'
})
export class ApplicationListComponent {

  @ViewChild('hp', undefined) hp: HttpPaginationComponent;

  url:string = environment.domain + "/fmApplication/list";

  param:any = {
    name: 'admin',
    age: 16
  }

  dataList:Array<any>=[

  ]

  pageList:Array<number>= [10, 25, 35]
  size: number = this.pageList[0]

   constructor(
     private appService: AppService,
     private ngbModalService: NgbModal,
     private httpService: HttpService,
     public applicationService: ApplicationService,
     private toastService: ToastService
   ) {
    this.appService.titleEventEmitter.emit("用户列表");
  }

  onDataChanged($event){
    this.dataList = $event;
  }

  // viewUserInfo (id) {
  //   const modalRef = this.ngbModalService.open(UserInfoComponent, { size: 'lg'});
  //   modalRef.componentInstance.userId = id;
  // }
  //
  // addUser() {
  //   const modalRef = this.ngbModalService.open(UserModifyComponent, { size: 'lg'}).result.then((result) => {
  //   }, (reason) => {
  //     this.hp.search();
  //   });
  // }
  //
  // updateUser(id) {
  //   const modalRef = this.ngbModalService.open(UserModifyComponent, { size: 'lg'});
  //   modalRef.componentInstance.userId = id;
  //   modalRef.componentInstance.operation = 'update';
  //
  //   modalRef.result.then((result) => {
  //   }, (reason) => {
  //     this.hp.search();
  //   });
  // }

  delUser(id) {
    this.httpService.post(this.applicationService.delApplicationInfo(id), {}, (successful, data, res) => {
      const toastCfg = new ToastConfig(ToastType.SUCCESS, '项目删除成功', '', 3000);
      this.toastService.toast(toastCfg)
      this.hp.search();
    }, function (successful, msg, err) {
      const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
    });
  }
}
