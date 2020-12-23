import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CustomerService } from '../../../service/apiservice/customer.service';
import { ReportsService } from '../../../service/apiservice/reports.service';

import { Globals } from '../../../global';
import { Router } from '@angular/router';
import {jsPDF} from 'jspdf';
import * as printJS from 'print-js'
import 'jspdf-autotable';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import { ReportModel } from '../../../service/model/report.model';
import { NgxSpinnerService } from 'ngx-spinner';
declare var $;

@Component({
  selector: 'app-customer-payment-report',
  templateUrl: './customer-payment-report.component.html',
  styleUrls: ['./customer-payment-report.component.scss']
})
export class CustomerPaymentReportComponent implements OnInit {

  report : ReportModel= new ReportModel();
  openPdfPath :string;
  @ViewChild('dataTable') table;
  loginRoleId:number;
  @ViewChild('closeReportTypeBtn') closeReportTypeBtn:ElementRef;
  tableCondition: any;
  customerList: any;
  customerPaymentData: any;
  totalcollectionAmount: number = 0;

  constructor(
    private customerService:CustomerService,
    private chRef:ChangeDetectorRef,
    private reportsService:ReportsService,
    private global:Globals,
    private router:Router,
    private spinnerService: NgxSpinnerService,
    ) {}
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

  ngOnInit() {
    this.router.url;
    console.log("Active Router:"+this.router.url);
    localStorage.setItem("Active Route",this.router.url);
    this. GetCustomerList()
    let today = new Date
    this.report.fromDate =  today.toString()

  }

  GetCustomerList() {
    debugger
    this.spinnerService.show();
    this.customerService.getCustomerList()
      .subscribe((response) => {
        this.spinnerService.hide();
        this.customerList = response;
      },
        error => {
          this.spinnerService.hide();
        })
  }

  // getReportId($event){  
  //   this.reportId = $event.target.value;
  // }

  ReportSubmit(){
    debugger
    // if(this.report.customerId == undefined || this.report.customerId == null || this.report.customerId == 0 )
    // {
    //   this.report.customerId = 0;
    // }
    
    // else{
    // }

    this.reportsService.getCustomerPaymentReport(this.report)
      .subscribe((response)=>
      {
       // console.log(response);
       this.showNotification('top','right','success','Search Successfully');
       console.log(response)
        this.customerPaymentData=response
        if ($.fn.dataTable.isDataTable('#customerPaymentTable')) {
          $('#customerPaymentTable').dataTable().fnClearTable();
          $('#customerPaymentTable').dataTable().fnDestroy();
        }
        this.totalcollectionAmount = 0;
        this.customerPaymentData.forEach((element,i)=> {
          this.totalcollectionAmount+= element.collectionAmount;
        });
        this.chRef.detectChanges();
        $("#customerPaymentTable").dataTable({
            dom:'lBfrtip',
            buttons: [
              { extend: 'pdf', className: 'mat-raised-button',attr:{id:"pdfBtn"}},
              { extend: 'excel', className: 'mat-raised-button',attr:{id:"excelBtn"}}
            ]
          });
        return false
      })

  }
 

  ExportExcel():void
  {
    $("#excelBtn").click();
  }

  ExportPdf():void
  {
    $("#pdfBtn").click();
   
  }


  openInvoicePdf(data) {
    this.openPdfPath = this.global.G_apiUrl+data;
    console.log( this.openPdfPath);

  }
  print(){
    
    printJS(this.openPdfPath,"pdf");
    
  }
  resetPdfPath(){
    this.openPdfPath=null;
  }
  DownloadPdf(data) {
    window.open(data, '_blank');
    console.log(data);
  }


  // viewIncomePdf(){
    
  //   this.flatTemp;
  //   this.flatstatementData;
  //   this.societyProfileService.getSocietyProfile(this.loginId)
  //   .subscribe((response) => {
  //     if(response !=null){
  //       this.societyInfo =response;
  //     }
  //   }, error => {
       
  //     })
  //     this.registeredOwnerService.getRegisteredOwnerInfoByFlatId(this.flatTemp.flatId)
  //   .subscribe((response1) => {
  //     if(response1 !=null){
  //       this.registeredOwnerInfo = response1;
  //     }
  //   }, error => {
  //     this.registeredOwnerInfo = null;
  //     })
  // }
  
  public downloadPDF() {
     
    html2canvas(document.getElementById('content')).then(canvas=> {
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF('p', 'mm', 'a4');
      doc.addImage(img,'JPEG', 7, 6, 12, 15);
      doc.save('Report.pdf');
      
    });
    
    // let doc = new jsPDF();
    // const specialElementHandlers = {
    //   '#editor': function (element,renderer) {
    //     return true;
    //   }
    // };
  
    // const content = this.content.nativeElement;
  
    // doc.fromHTML(content.innerHTML, 15, 15, {
    //   width: 190,
    //   'elementHandlers': specialElementHandlers
    // });
    // doc.save('test.pdf');
  }
  
  print1(): void {
    let printContents, popupWin;
    printContents = document.getElementById('content').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Report</title>
          <style>
          form label
          {
              font-weight: bold;
              color: black;
          }
          h5
          {
              font-weight: bold;
              color: black;
          }
          i{
              padding: 5px;
              cursor: pointer;
          }
          
          .visitormodal {
              width:100%;
           }
          
          //  .flattable{
          //     cursor:url('assets/img/eyeicon.png') 1 3,auto;
          // }
          tr{
              cursor: pointer;
              }
          
          
              .maintable{
                  border: 1px solid black
              }
              
              .tableborderright{
                  border-right: 1px solid black
              }
              
              .tablebordertop{
                  border-top: 1px solid black
              }
              
              .tableborderbottom{
                  border-bottom: 1px solid black
              }
              
              @page {
                      size: 8.27in 11.69in; 
                      margin: .5in .5in .5in .5in; 
                      mso-header-margin: .5in; 
                      mso-footer-margin: .5in; 
                      mso-paper-source: 0;
               }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
  
}

