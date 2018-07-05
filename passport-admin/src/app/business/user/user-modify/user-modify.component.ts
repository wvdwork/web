import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../../../shared/http/http.service';
import { UserService } from '../../../service/user/user.service';

import { ToastConfig, ToastType } from '../../../shared/toast/toast-model';
import {UserModel} from "../model/user-model";
import {Validators, FormControl, FormGroup, FormBuilder} from "@angular/forms";
import {ToastService} from "../../../shared/toast/toast.service";

/**
 * 修改密码组件
 */
@Component({
    templateUrl: './user-modify.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./user-modify.component.scss']
})
export class UserModifyComponent {

   userModifyForm: FormGroup;

   userId: any;

   operation: string;

   userDataInfo: UserModel;

  constructor(
    public activeModal: NgbActiveModal,
    private httpService: HttpService,
    private userService: UserService,
    private toastService: ToastService,
    private formBuilder: FormBuilder
  ) {
    let userNameFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)]));
    let userAccountFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)]));
    let userMailFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)]));
    let userPhoneFc= new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)]));
    let userNickNameFc = new FormControl('');

    this.userModifyForm=this.formBuilder.group({
      userName:userNameFc,
      userAccount: userAccountFc,
      userMail: userMailFc,
      userPhone: userPhoneFc,
      userNickName: userNickNameFc
    });
  }

  ngOnInit() {
    if (this.operation == 'update') {
      this.httpService.get(this.userService.getUserById(this.userId), {}, (successful, data, res) => {
        this.userDataInfo = data.data;
      }, function (successful, msg, err) {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
      });
    } else {
      this.userModifyForm.controls["userName"].setValue("aa")
      this.userModifyForm.controls["userAccount"].setValue("bb");
    }
  }

  save() {
    if(this.userModifyForm.valid) {
      let userInfo: any = {
        userName: this.userModifyForm.controls["userName"].value,
        userAccount: this.userModifyForm.controls["userAccount"].value,
        userMail: this.userModifyForm.controls["userMail"].value,
        userPhone: this.userModifyForm.controls["userPhone"].value,
        userNickName: this.userModifyForm.controls["userNickName"].value
      };

      this.httpService.post(this.userService.saveUserInfo(), userInfo, (successful, data, res) => {
        const toastCfg = new ToastConfig(ToastType.SUCCESS, '保存成功', '', 3000);
        this.toastService.toast(toastCfg);
        this.close();
      }, function (successful, msg, err) {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
      });
    }
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
