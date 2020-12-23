import { Component, OnInit } from '@angular/core';
import { Globals } from '../../global';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/jobseeker', title: 'Job Seeker', icon: 'account_circle', class: '' },
  { path: '/recuriter', title: 'Recuriter', icon: 'account_circle', class: '' },
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  menuItems1: any[];

  

  reportItems:any[];
  reportIcon="insert_chart";
  reportTitle="Report";

  


  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    // this.menuItems1 = ROUTES1.filter(menuItem1 => menuItem1);


  

    this.reportItems= new Array(
      
      { path: '/customer-payment-report', title: 'Payment Report', icon: 'content_paste', class: '' },
      { path: '/customer-due-report', title: 'Due Report', icon: 'content_paste', class: '' },

    )
    }






  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

 

  
}
