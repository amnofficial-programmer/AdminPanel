import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CustomerModel } from '../../service/model/customer.model';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Globals } from '../../global';
import { Router } from '@angular/router';


declare var $;
import swal from 'sweetalert';
import { CustomerService } from '../../service/apiservice/customer.service';
import { AgentService } from '../../service/apiservice/agent.service';
import { RecruiterService } from '../../service/apiservice/recruiter.service';
import { RecruiterModel } from '../../service/model/recruiter.model';
// import { AgentModel } from 'app/service/model/agent.model';


@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.scss']
})
export class RecruiterComponent implements OnInit {

  recruiterGrid: any;
  // addCustomer: CustomerModel = new CustomerModel();
  // customerUpdate: CustomerModel = new CustomerModel();
  // customerDelete: CustomerModel = new CustomerModel();
  // customerActive: CustomerModel = new CustomerModel();
  // customerDeactive: CustomerModel = new CustomerModel();

  customerViewData: CustomerModel;
  recruiterViewData:RecruiterModel;
  @ViewChild('dataTable') table;
  // @ViewChild('addForm') addFormValue;
  // @ViewChild('updateForm') updateFormValue;
  // @ViewChild('closeaddForm') closeaddForm: ElementRef;
  // @ViewChild('closeupdateForm') closeupdateForm: ElementRef;
  // @ViewChild('closedeleteForm') closedeleteForm: ElementRef;
  // @ViewChild('closeassignForm') closeassignForm: ElementRef;
  // @ViewChild('fileForm') fileForm: ElementRef;
  // @ViewChild('myInput')
  myInputVariable: ElementRef;
  selectedFile: File = null;
  uploadImgSrc: any;
  uploadShowImg: boolean = false;
  file: File;
  imgurl: string | ArrayBuffer;
  imgname: string[];
  last: any;
  flagKeypress: boolean = false;
  status: number;
  flagError: boolean;

  varificationStatus;
  pageNo = 1;
  itemsPerPage = 10;
  customerList :any = [];
  customerListLength : any;
  responseObj: any;
  customerIdList :any = [];
  agentGrid: any;
  agentId:any = 0;
  openingDueAmounterr: boolean= false;
  filteredAgents = new Array();
  filteredAgentsFlag: boolean = false;
  constructor(
    private customerService: CustomerService,
    private agentService: AgentService,
    private chRef: ChangeDetectorRef,
    private http: HttpClient,
    private spinnerService: NgxSpinnerService,
    private global: Globals, 
    private router: Router,
    private recruiterService:RecruiterService
    ) { 

    }

  showNotification(from, align, color, message) {

    // type = ['','info','success','warning','danger'];
    // const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "notifications",
      message: message

    }, {
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
    console.log("Active Router:" + this.router.url);
    localStorage.setItem("Active Route", this.router.url);
    this.GetRecriuterList();
    // this.getCustomerListByPagination();
    // this.GetAgentList()

  }

  // [;'/]
  //   this.spinnerService.show();
  //   this.agentService.getAgentList()
  //     .subscribe((response) => {
  //       this.spinnerService.hide();
  //       if ($.fn.dataTable.isDataTable('#agentdataTable')) {
  //         $('#agentdataTable').dataTable().fnClearTable();
  //         $('#agentdataTable').dataTable().fnDestroy();
  //       }
  //       console.log(response);
  //       this.agentGrid = response;
  //       //Object.assign(this.agentGrid,response);
  //       this.chRef.detectChanges();
  //       $("#agentdataTable").dataTable({
  //         "order": [[0, "desc"]],
  //         dom: 'lBfrtip',
  //         buttons: [
  //           { extend: 'pdf', className: 'mat-raised-button', attr: { id: "pdfBtn" }, exportOptions: { columns: [1, 2, 3, 4, 5, 6, 7, 8, 9] } },
  //           { extend: 'excel', className: 'mat-raised-button', attr: { id: "excelBtn" }, exportOptions: { columns: [1, 2, 3, 4, 5, 6, 7, 8, 9] } }
  //         ]
  //       });
  //     },
  //       error => {
  //         this.spinnerService.hide();
  //       })
  // }

  // //Add Customer
  // AddCustomerSubmit() {
  //   debugger
  //   if(this.openingDueAmounterr == true){

  //     return
  //   }
  //   this.spinnerService.show();
  //   this.customerService.AddCustomer(this.addCustomer)
  //     .subscribe((response) => {
  //       this.spinnerService.hide();
  //       this.addFormValue.resetForm();
  //       this.closeaddForm.nativeElement.click();
  //       this.GetCustomerList();
  //       this.getCustomerListByPagination();
  //       this.openingDueAmounterr = false;
  //       this.showNotification('top', 'right', 'success', 'Customer Add Successfully');
  //     },
  //       error => {
  //         this.spinnerService.hide();
  //         this.openingDueAmounterr = false;
  //         this.showNotification('top', 'right', 'danger', 'Error To Add Customer');

  //       })
  // }

  GetRecriuterList() {
    debugger
    this.spinnerService.show();
    var recruiterStatus=2;
   var index=1;
    this.recruiterService.getRecruiterList(recruiterStatus,index)
      .subscribe((response) => {
        this.spinnerService.hide();
        if ($.fn.dataTable.isDataTable('#customerdataTable')) {
          $('#customerdataTable').dataTable().fnClearTable();
          $('#customerdataTable').dataTable().fnDestroy();
        }
        console.log(response);
        this.recruiterGrid = response['data'];
        //Object.assign(this.customerGrid,response);
        this.chRef.detectChanges();
        $("#customerdataTable").dataTable({
          "order": [[1, "desc"]],
          dom: 'lBfrtip',
          stateSave: true,
          "bStateSave": true,
         // draw :  false ,
          buttons: [
            { extend: 'pdf', className: 'mat-raised-button', attr: { id: "pdfBtn" }, exportOptions: { columns: [1, 2, 3, 4, 5, 6, 7, 8, 9] } },
            { extend: 'excel', className: 'mat-raised-button', attr: { id: "excelBtn" }, exportOptions: { columns: [1, 2, 3, 4, 5, 6, 7, 8, 9] } }
          ]
        });
      },
        error => {
          this.spinnerService.hide();
        })
  }


  getCustomerListByPagination(){
    debugger
       this.spinnerService.show()
       let pageNo = this.pageNo-1;
       this.pageNo;
       this.itemsPerPage;
      this.customerService.getCustomerListByPagination(pageNo,this.itemsPerPage).subscribe((response) =>{
             this.responseObj = response

          this.customerList = this.responseObj.content
          this.customerListLength = this.responseObj.totalElements
          this.spinnerService.hide()
       

      },
      error => {
        this.spinnerService.hide();
      })
  }

  itemsPerPageChange($event){
    
    this.itemsPerPage = parseInt($event.target.value); 
    this.itemsPerPage;


      this.spinnerService.show()
      let pageNo =  this.pageNo-1;
      this.pageNo;
      this.itemsPerPage;
      this.customerService.getCustomerListByPagination(pageNo,this.itemsPerPage).subscribe((response) =>{
        this.responseObj = response

        this.customerList = this.responseObj.content
        this.customerListLength = this.responseObj.totalElements
         this.spinnerService.hide()

         if(this.customerIdList.length != 0){
          for (let index = 0; index <  this.customerList.length; index++) {
            for (let index1 = 0; index1 < this.customerIdList.length; index1++) {
               if(this.customerList[index].customerId == this.customerIdList[index1].customerId){
                this.customerList[index].checkProp = 'checked'; 
               // $("#checkbox_"+this.customerList[index].jobseekerId).prop('checked', true);
               }
            }
          }
        }  
     },
     error => {
       this.spinnerService.hide();
     })
  }

  pageNoChange($event){
    debugger
    let pageNo = $event-1;

    this.pageNo = $event;

      this.spinnerService.show()
      this.pageNo;
      this.itemsPerPage;
      this.customerService.getCustomerListByPagination(pageNo,this.itemsPerPage).subscribe((response) =>{
        this.responseObj = response

        this.customerList = this.responseObj.content
        this.customerListLength = this.responseObj.totalElements
         this.spinnerService.hide()

          if(this.customerIdList.length != 0){
            for (let index = 0; index <  this.customerList.length; index++) {
              for (let index1 = 0; index1 < this.customerIdList.length; index1++) {
                 if(this.customerList[index].customerId == this.customerIdList[index1].customerId){
                  this.customerList[index].checkProp = 'checked'; 
                 // $("#checkbox_"+this.customerList[index].jobseekerId).prop('checked', true);
                 }
              }
            }
          }
     },
     error => {
       this.spinnerService.hide();
     })
  }

  onSelection(data,$event){
    debugger
    data.customerId
    if( $event.target.checked){
      this.customerIdList.push(data)
      $("#selecterror").html("");
    }else{
      const index = this.customerIdList.findIndex(item =>item.customerId === data.customerId);
      this.customerIdList.splice(index, 1);
    }

    this.customerIdList
  }
  agentSelection($event){
    $("#selecterror").html("");
  }

  // assignSubmit(agentId){
  //   debugger
  //   if(agentId == undefined || agentId == null){
  //     $("#selecterror").html("Please Select Agent");
  //     return
  //   }else{
  //     $("#selecterror").html("");
  //   }

  //   if(this.customerIdList.length == 0){
  //     $("#selecterror").html("Please Select Customer From Customer List");
  //     return
  //   }else{
  //     $("#selecterror").html("");
  //   }

  //   agentId = parseInt(agentId)
  //   this.customerIdList

  //   let agent = {'agentId':0}
  //   agent.agentId = parseInt(agentId);
  //   agent
  //   this.customerIdList.forEach(element=> {
  //     element.agent = agent
  //   });
  //   this.customerIdList
    
  //   this.customerService.selectedCustomerAssign(this.customerIdList).subscribe((response) =>{
     
  //     this.spinnerService.hide();
  //     this.closeassignForm.nativeElement.click();
  //     this.GetCustomerList();
  //     this.getCustomerListByPagination();
  //     this.showNotification('top', 'right', 'success', 'Assigning Agent To Customer List Successfully');
  //     this.filteredAgentsFlag = false;
  //     this.customerIdList = [];
  //     this.filteredAgents = [];
  //     this.agentId = null;
  //   },
  //     error => {
  //       this.spinnerService.hide();
  //       this.closeassignForm.nativeElement.click();
  //       this.GetCustomerList();
  //       this.getCustomerListByPagination();
  //       this.showNotification('top', 'right', 'danger', 'Error To Assigning Agent To Customer List');
  //       this.filteredAgentsFlag = false;
  //       this.customerIdList = [];
  //       this.filteredAgents = [];
  //       this.agentId = null;
  //     })
    
  // }

  // ReassignAgent(data){
  //   debugger
  //   this.customerIdList.push(data)
  //   this.filteredAgents = []
  //   this.agentGrid.forEach((element,i)=> {
  //     if(element.agentId ===  data.agent.agentId){
       
  //     }else{
  //       this.filteredAgents.push(this.agentGrid[i]) ;
  //     }
  //   });
  //   console.log(this.filteredAgents)
  //   this.filteredAgentsFlag = true;
  
  // }


  // deleteAssignList(){
  //   this.filteredAgentsFlag = false;
  //   this.customerIdList = [];
  //   this.filteredAgents = [];
  //   this.agentId = null
  // }

  // UpdateDataBind(data) {
  //   debugger
  //   this.customerUpdate = data;
  // }

  // UpdateCustomerSubmit() {
  //   if(this.openingDueAmounterr == true){

  //     return
  //   }
  //   this.spinnerService.show();
  //   this.customerService.UpdateCustomer(this.customerUpdate)
  //     .subscribe((response) => {
  //       if (response) {
  //         this.spinnerService.hide();
  //         this.updateFormValue.resetForm();
  //         this.closeupdateForm.nativeElement.click();
  //         // this.GetCustomerList();
  //         // this.getCustomerListByPagination();
  //         this.openingDueAmounterr = false;
  //         this.showNotification('top', 'right', 'success', 'Customer Update Successfully');
  //       }
  //       else {
  //       }
  //     },
  //       error => {
  //         this.spinnerService.hide();
  //         this.openingDueAmounterr = false;
  //         this.showNotification('top', 'right', 'danger', 'Error to Update Customer');
  //       })
  // }
  

  // DeleteDataBind(data) {
  //   this.customerDelete = data;
  // }

  // DeleteCustomerSubmit() {
  //   this.spinnerService.show();
  //   this.customerService.DeleteCustomer(this.customerDelete.customerId)
  //     .subscribe((response) => {
  //       this.spinnerService.hide();
  //       this.closedeleteForm.nativeElement.click();
  //       this.GetCustomerList();
  //       this.getCustomerListByPagination();
  //       this.showNotification('top', 'right', 'success', 'Customer Delete Successfully');


  //     },
  //       error => {
  //         this.spinnerService.hide();
  //         this.closedeleteForm.nativeElement.click();
  //         this.GetCustomerList();
  //         this.getCustomerListByPagination();
  //         this.showNotification('top', 'right', 'danger', 'Error To Delete Customer');
  //       })
  // }


  ExportExcel(): void {
    $("#excelBtn").click();
    //$('#customers').tableExport({type:'excel',escape:'false'}).click();
  }

  ExportPdf() {
    $("#pdfBtn").click();
  }

  ViewDataBind(data) {
    this.recruiterViewData = data;
  }


  // addCloseClick() {
  //   this.addFormValue.resetForm();
  //   this.openingDueAmounterr = false;
  // }

  // addCancelClick() {
  //   this.addFormValue.resetForm();
  //   this.openingDueAmounterr = false;
  // }

  // updateCloseClick() {
  //   this.customerUpdate = new CustomerModel();
  //   this.GetCustomerList();
  //   this.getCustomerListByPagination();
  //   this.openingDueAmounterr = false;
  // }

  // updateCancelClick() {
  //   this.customerUpdate = new CustomerModel();
  //   this.GetCustomerList();
  //   this.getCustomerListByPagination();
  //   this.openingDueAmounterr = false;
  // }

  _keyPress1(event: any) {

    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }

  }

  // keyup($event){
  //   debugger
   
  //   if(this.addCustomer.loanAmount >  parseInt($event.target.value)){
  //     $("#openingDueAmounterr").html("");
  //     this.openingDueAmounterr = false;
  //   }else{
  //     $("#openingDueAmounterr").html("Please Enter Less Amount");
  //     this.openingDueAmounterr = true;
  //   }
  // }

  // keyupupdate($event){
  //   debugger
   
  //   if(this.customerUpdate.loanAmount >  parseInt($event.target.value)){
  //     $("#openingDueAmounterr").html("");
  //     this.openingDueAmounterr = false;
  //   }else{
  //     $("#openingDueAmounterr").html("Please Enter Less Amount");
  //     this.openingDueAmounterr = true;
  //   }
  // }

  submitUpdateVerificationStatus(){

    // jobSeekerViewData
    this.spinnerService.show();
  
    if(this.recruiterViewData.verificationStatus==="1"){
      this.varificationStatus=1;
    }else{
      this.varificationStatus=0;
    }
    this.recruiterService.updateVerifactionStatus(this.recruiterViewData.id, this.varificationStatus).subscribe(res=>{
      this.spinnerService.hide();
      this.showNotification('top', 'right', 'success', 'Recruiter Status Updated');
    },err=>{
      this.spinnerService.hide();
      this.showNotification('top', 'right', 'danger', 'Error To Update Recruiter Status');
    })
  }
  

}
