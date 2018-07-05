import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {UserModel} from "../../business/user/model/user-model";

@Injectable()
export class UserService {

  constructor() { }
  /**
   * 根据ID获取用户信息
   */
  getUserById(id: number){
    return environment.domain + "/fmUser/user/" + id;
  }

  /**
   * 保存用户信息
   */
  saveUserInfo(){
    return environment.domain + "/fmUser/user/save";
  }

  /**
   * 删除用户信息
   */
  delUserInfo(id: number){
    return environment.domain + "/fmUser/user/del/" + id;
  }
}
