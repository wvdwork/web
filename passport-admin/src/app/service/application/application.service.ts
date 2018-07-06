import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {UserModel} from "../../business/user/model/user-model";

@Injectable()
export class ApplicationService {

  constructor() { }
  /**
   * 根据ID获取项目信息
   */
  geApplicationById(id: number){
    return environment.domain + "/fmApplication/application/" + id;
  }

  /**
   * 保存项目信息
   */
  saveApplicationInfo(){
    return environment.domain + "/fmApplication/application/save";
  }

  /**
   * 修改项目信息
   */
  updateApplicationInfo(id: number){
    return environment.domain + "/fmApplication/application/update/" + id;
  }

  /**
   * 删除项目信息
   */
  delApplicationInfo(id: number){
    return environment.domain + "/fmApplication/application/del/" + id;
  }
}
