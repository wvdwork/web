import { Component, OnInit,ViewChild} from '@angular/core';
import { AppService } from '../../../app.service';

import {HttpPaginationComponent} from '../../../shared/pagination/http-pagination.component';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'c-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit{
  ngOnInit(): void {
  }

  @ViewChild('hp', undefined) hp: HttpPaginationComponent;

  url:string=environment.domain + "/fmUser/list";

  param:any = {
    name: 'admin',
    age: 16
  }

  dataList:Array<any>=[

  ]

  pageList:Array<number>= [10, 25, 35]
  size: number = this.pageList[0]

   constructor(private appService: AppService) {
    // this.appService.titleEventEmitter.emit("用户列表");
  }

  onDataChanged($event){
    this.dataList = $event;
  }

  alert() {

  }
}
