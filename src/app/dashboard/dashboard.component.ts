import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef, StaticProvider } from '@angular/core';
import * as Chartist from 'chartist';
import { NgxSpinnerService } from 'ngx-spinner';
import { Globals } from '../global';
import { Router } from '@angular/router';
import { DashboardService } from '../service/apiservice/dashboard.service';
declare var $

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';
  @ViewChild("myckeditor") ckeditor: any;

 
  recuriterDashboardData:any;
  jobSeekerDashboardData:any;


  dashboardData :any;
 
  constructor(private dashboardService:DashboardService,private spinnerService: NgxSpinnerService,private global:Globals,private router:Router) { 
   
  }
  showNotification(from, align, color,message){
     
    // type = ['','info','success','warning','danger'];
    // const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: "notifications",
        message: message

    },{
        type: color,
        timer: 2000,
        placement: {
            from: from,
            align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}

  
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  ngOnInit() {
    debugger
    this.router.url;
    console.log("Active Router:"+this.router.url);
    localStorage.setItem("Active Route",this.router.url);
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
 
    
  this.jobSeekerDetails();
  this.recuriterDetails();


  }
jobSeekerDetails(){
  this.spinnerService.show();
  this.dashboardService.getDashboardDetailsJobSeeker().subscribe((response) =>{
    this.jobSeekerDashboardData = response.data
     this.spinnerService.hide()
 },
 error => {
   this.spinnerService.hide();
 })
}
recuriterDetails(){
  this.dashboardService.getDashboardDetailsRecuriter().subscribe((response) =>{
    this.recuriterDashboardData = response.data
     this.spinnerService.hide()
 },
 error => {
   this.spinnerService.hide();
 })
}



  onChange($event: any): void {
    console.log("onChange");
    //this.log += new Date() + "<br />";
  }

  onPaste($event: any): void {
    console.log("onPaste");
    //this.log += new Date() + "<br />";
  }
}
