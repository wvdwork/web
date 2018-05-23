import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import {MainData, MenuData} from '../main/main-model';
import { ModalService } from '../shared/modal/modal.service';
import { ConfirmConfig } from '../shared/modal/modal-model';
//
// import { AvatarCropperComponent } from '../business-shared/user/avatar-cropper/avatar-cropper.component';
// import { PasswordEditComponent } from '../business-shared/user/password-edit/password-edit.component';
import { AppService } from '../app.service';
import { HttpService } from '../shared/http/http.service';
import { environment } from '../../environments/environment';

/**
 * 主体组件
 */
@Component({
  selector: 'c-main',
  templateUrl: './main.component.html',
  styleUrls: ['.//main.component.scss']
})
export class MainComponent implements OnInit {

  //切换导航
  toggleDescTip: string = "点击关闭导航菜单";

  //切换导航标识
  navClose: boolean = false;


  //用户数据
  mainData: MainData = {
    userData: {userName: "", userAvatar: "", mobilePhone: "", email: "", positions: ""},
    appData: {appName: "", appLogoUrl: ""},
    menuData: []
  };

  title: string = "首页";

  main
  constructor(
    private router: Router,
    private modalService: ModalService,
    private ngbModalService: NgbModal,
    private appService: AppService,
    private httpService: HttpService) {
    this.appService.titleEventEmitter.subscribe((value: string) => {
      if (value) {
        this.title = value;
      }
    })
  }


  /**
   * 初始化
   */
  ngOnInit() {
    this.mainData.userData = {userName: "aaaaa", userAvatar: "./assets/img/user-header.png", mobilePhone: "cccc", email: "ddd", positions: "eee"};
    this.mainData.appData = {appName: "ttttttt", appLogoUrl: ""};

    this.httpService.get(environment.domain + "fmMenu/list", {},
      (successful, data, res) => {
        console.log(data);
        if (data.success == true) {

        }
      }, function (successful, data, error) {
        console.log(data);
      })

    this.httpService.get(environment.domain + "fmMenu/list", {},
      (successful, data, res) => {
        console.log(data);
        if (data.success == true) {
          let menuArray = data.data;
          for (let i = 0; i < menuArray.length; i++) {
            let objMeau = {
              id: menuArray[i].id,
              parentId: menuArray[i].parentId,
              name: menuArray[i].menuName,
              keyWord: "",
              icon: menuArray[i].menuIconUrl,
              isExpend: false,
              url: menuArray[i].menuResourceUrl,
              children: []
            };
            this.mainData.menuData.push(objMeau);
          }

        }
      }, function (successful, data, error) {
        console.log(data);
      })

  }

  /**
    * 切换导航
   */
  toggleNav() {
    this.navClose = !this.navClose;
    if (this.navClose) {
      this.toggleDescTip = "点击展开导航菜单";
    } else {
      this.toggleDescTip = "点击关闭导航菜单";
    }
  }

  /**
   * 跳转首页
   */
  toHome() {
    this.title = "首页";
    this.router.navigate(['/app/home']);
  }

  /**
   * 个人资料
   */
  userInfo() {
    this.router.navigate(['/app/user/userInfo']);
  }

  /**
   * 头像更换
   */
  // avatarReplacement() {
  //   this.ngbModalService.open(AvatarCropperComponent, { size: 'lg', backdrop: 'static', keyboard: false }).result.then((result) => {
  //
  //   }, (reason) => {
  //
  //   });
  // }

  /**
   * 修改密码
   */
  // passwordEdit() {
  //   this.ngbModalService.open(PasswordEditComponent, { size: 'lg' }).result.then((result) => {
  //
  //   }, (reason) => {
  //
  //   });
  // }


  /**
   * 退出系统
   */
  exitSys() {
    let exitSysCfg = new ConfirmConfig('您确定退出系统吗？');
    this.modalService.confirm(exitSysCfg).then((result) => {
      if (result.status == "approved") {
        this.router.navigate(['/login']);
      }
    }, (reason) => {
    });
  }
}


