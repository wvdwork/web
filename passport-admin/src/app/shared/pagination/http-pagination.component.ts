import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { HttpService } from '../http/http.service';
import { Utils } from '../util/utils';
import { ToastService } from '../toast/toast.service';
import { ToastConfig, ToastType } from '../toast/toast-model';

import { PaginationType, HttpPaginationMethod } from './pagination-model';



/**
 * c-http-pagination组件
 */
@Component({
    selector: 'c-http-pagination',
    template: `
       <c-pagination [total]="total" [pageList]="pageList" [btnCls]="btnCls" (onPageChanged)="onPageChanged($event)"></c-pagination>
    `
})
export class HttpPaginationComponent implements OnInit {

    @Input()
    pageList: Array<number> = [10, 20, 30, 50, 100, 150, 200];

    @Input()
    btnCls: string = 'btn-light';

    @Input()
    url: string;

    @Input()
    method: string = 'post';

    @Input()
    param: any = new Object();

  @Input()
  condition: any = new Object();


    @Output()
    onDataChanged = new EventEmitter();

    @Input()
    size: number = this.pageList[0];



    total: number = 0;
    pages: number = 1;
    current: number = 1;




    constructor(private httpService: HttpService, private toastService: ToastService) {

    }

    /**
    * 初始化
    */
    ngOnInit() {
        this.getServerData();
    }

    /**
     * 查询方法
     */
    search(){
        this.getServerData();
    }

    /**
     * 获得服务器数据
     */
    private getServerData() {
        let that = this;
        let serviceData: any = {};
        if (Utils.isArray(this.param)) {
            serviceData.size = this.size;
            serviceData.current = this.current;
            serviceData.list = this.param;
        } else if (Utils.isObject(this.param)) {
            this.param.size = this.size;
            this.param.current = this.current;
            serviceData = this.param;
        } else {
            serviceData.current = this.current;
            serviceData.size = this.size;
        }

        this.condition = this.param;

        if (this.method == HttpPaginationMethod.GET && Utils.isNotEmpty(this.url)) {
            this.httpService.get(this.url, serviceData, function (successful, data, res) {
                if (successful) {
                    that.serverDataProcess(data);
                } else {
                    const toastCfg = new ToastConfig(ToastType.ERROR, '', '数据请求失败！', 3000);
                    that.toastService.toast(toastCfg);
                }
            }, function (successful, msg, err) {
                const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
                that.toastService.toast(toastCfg);
            });
        } else if (Utils.isNotEmpty(this.url)) {
            this.httpService.post(this.url, serviceData, function (successful, data, res) {
                if (successful) {
                    that.serverDataProcess(data);
                } else {
                    const toastCfg = new ToastConfig(ToastType.ERROR, '', '数据请求失败！', 3000);
                    that.toastService.toast(toastCfg);
                }
            }, function (successful, msg, err) {
                const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
                that.toastService.toast(toastCfg);
            });
        } else {
            console.error("c-http-pagination组件请求时，url参数为空！");
        }
    }


    /**
     * 服务器端数据处理
     * @param data 数据
     */
    private serverDataProcess(data: any) {
        data = data.data;
        if ((data && data.total && data.current) >= 0) {
            this.total = data.total;
            this.onDataChanged.emit(data.records);
        } else {
            console.error("c-http-pagination,返回的数据格式不正确！");
        }
    }


    /**
     * 分页改变事件
     * @param event
     */
     onPageChanged($event) {
        if ($event.type != PaginationType.PAGE_INIT) {
            this.pages = $event.pages;
            this.current = $event.current;
            this.getServerData();
        }
    }


}
