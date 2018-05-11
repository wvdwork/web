import { Component, OnInit, Input } from '@angular/core';
import {  Router } from '@angular/router';
import  { MenuData }    from '../../main/main-model';

@Component({
  selector: 'left-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls:['sidebar-menu.component.scss']
})
export class LeftSidebarMenuComponent {
  @Input() data:MenuData;

  constructor(private router: Router) {}

  onInit():void {}

  /**
   * 是否有子节点
   * @param item
   */
  isLeaf(item: MenuData) {
    return !item.children || !item.children.length;
  }

  /**
   * 点击
   * @param item
   */
  itemClicked(item: MenuData) {
    if (!this.isLeaf(item)) {
      item.isExpend = !item.isExpend;
    } else {
      this.router.navigate([item.url]);
    }
  }

  isCollapse=true;
  collapseClass="";

  clickLeaf() {
    this.isCollapse = !this.isCollapse;
    if (this.isCollapse == true) {
      this.collapseClass = "collapse";
    } else {
      this.collapseClass = "";
    }
  }
}
