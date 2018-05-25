import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

import { PaginationType, PaginationOptions } from './pagination-model';



/**
 * 分页组件
 */
@Component({
    selector: 'c-pagination',
    templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnChanges {

    @Input()
    total: number = 0;

    @Input()
    pageList: Array<number> = [10, 20, 30, 50, 100, 150, 200];

    @Input()
    btnCls: string = 'btn-light';

    @Output()
    onPageChanged = new EventEmitter();

    options: PaginationOptions = {};

  @Input()
  size: number;


  constructor() { }

    /**
    * 改变
    * @param changes
    */
    ngOnChanges(changes: SimpleChanges) {
        this.options.total = this.total;
        this.options.pageList = this.pageList;
        this.options.size = this.options.pageList[0];
        this.refreshPage();
        this.pageOperation(PaginationType.PAGE_INIT);
    }



    /**
     * 刷新分页
     */
     refreshPage() {
        this.options.pages = 0;
        if (Number.parseInt(this.options.total) % Number.parseInt(this.options.size) == 0) {
            this.options.pages = Number.parseInt(this.options.total) / Number.parseInt(this.options.size);
        } else {
            this.options.pages = Number.parseInt(this.options.total) / Number.parseInt(this.options.size) + 1;
        }
        this.options.pages = Number.parseInt(this.options.pages);

        if (this.options.pages <= 0) {
            this.options.current = 0;
        } else {
            this.options.current = 1;
        }
    }


    /**
     * 下一页
     */
    nextPage() {
        this.options.current++;
        if (this.options.current > this.options.pages) {
            this.options.current = this.options.pages;
        }
    }

    /**
     * 上一页
     */
    previousPage() {
        this.options.current--;
        if (this.options.current <= 0) {
            this.options.current = 1
        }
    }

    /**
     * 最后一页
     */
    lastPage() {
        this.options.current = this.options.pages;
    }

    /**
     * 第一页
     */
    fristPage() {
        this.options.current = 1;
    }

    /**
     * 分页操作
     * @param type  操作类型
     */
    pageOperation(type) {
        let pageParam = {
            current: this.options.current,
            size: this.options.size,
            pageList: this.options.pageList,
            total: this.options.total,
            type: type
        }
        this.onPageChanged.emit(pageParam);
    }

    /**
     * 分页改变
     * @param type 操作类型
     */
    pageChanged(type) {
        switch (type) {
            case PaginationType.NEXT_PAGE:
                this.nextPage();
                break;
            case PaginationType.LAST_PAGE:
                this.lastPage();
                break;
            case PaginationType.PREVIOUS_PAGE:
                this.previousPage();
                break;
            case PaginationType.FRIST_PAGE:
                this.fristPage();
                break;
        }
        this.pageOperation(type);
    }

    /**
     * 页数改变
     * @param $event  当前条件
     */
     pageSizeChanged($event) {
        this.options.size = Number.parseInt($event);
        this.refreshPage();
        this.pageOperation(PaginationType.PAGE_SIZE_CHANGE);
    }


}
