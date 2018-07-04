import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {

  constructor() { }
  /**
   * 根据ID获取用户信息
   */
  getUserById(id: number){
    return environment.domain + "/fmUser/user/" + id;
  }
}
