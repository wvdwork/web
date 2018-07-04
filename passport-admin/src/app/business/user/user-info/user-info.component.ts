import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../../../shared/http/http.service';
import { UserService } from '../../../service/user/user.service';

import { ToastService } from '../../../shared/toast/toast.service';
import { ToastConfig, ToastType } from '../../../shared/toast/toast-model';
import {UserModel} from "../model/user-model";

/**
 * 修改密码组件
 */
@Component({
    templateUrl: './user-info.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {


   userId: any;

   userDataInfo: UserModel;

  constructor(
    public activeModal: NgbActiveModal,
    private httpService: HttpService,
    public userService: UserService
  ) {

  }

  ngOnInit() {
    this.httpService.get(this.userService.getUserById(this.userId), {}, (successful, data, res) => {
      this.userDataInfo = data.data;
    }, function (successful, msg, err) {
      const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
    });
  }

    /**
     * 上传
     */
    ok(): void {
        // if(this.passwordEditForm.valid){
        //      const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '修改密码成功!', 2000);
        //      // this.close();
        // }
    }

    /**
       * 关闭
       */
    close(): void {
        this.activeModal.dismiss({ status: 'closed' });
    }
}
