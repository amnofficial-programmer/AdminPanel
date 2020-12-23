import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AgentModel } from '../../service/model/agent.model';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Globals } from '../../global';
import { Router } from '@angular/router';

declare var $;
import swal from 'sweetalert';
import { AgentService } from '../../service/apiservice/agent.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {

  agentGrid: any;
  addAgent: AgentModel = new AgentModel();
  agentUpdate: AgentModel = new AgentModel();
  agentDelete: AgentModel = new AgentModel();
  agentActive: AgentModel = new AgentModel();
  agentDeactive: AgentModel = new AgentModel();

  agentViewData: AgentModel;
  @ViewChild('dataTable') table;
  @ViewChild('addForm') addFormValue;
  @ViewChild('updateForm') updateFormValue;
  @ViewChild('closeaddForm') closeaddForm: ElementRef;
  @ViewChild('closeupdateForm') closeupdateForm: ElementRef;
  @ViewChild('closedeleteForm') closedeleteForm: ElementRef;
  @ViewChild('closeactiveForm') closeactiveForm: ElementRef;
  @ViewChild('closedeactiveForm') closedeactiveForm: ElementRef;
  @ViewChild('fileForm') fileForm: ElementRef;
  @ViewChild('myInput')
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

  pageNo = 1;
  itemsPerPage = 10;
  agentList :any = [];
  agentListLength : any;
  responseObj: any;
  
  constructor(
    private agentService: AgentService,
    private chRef: ChangeDetectorRef,
    private http: HttpClient,
    private spinnerService: NgxSpinnerService,
    private global: Globals, 
    private router: Router
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
    this.GetAgentList();
    this.getAgentListByPagination();
  }



  // //Add Agent
  AddAgentSubmit() {
    this.spinnerService.show();
    this.agentService.AddAgent(this.addAgent)
      .subscribe((response) => {
        this.spinnerService.hide();
        this.addFormValue.resetForm();
        this.closeaddForm.nativeElement.click();
        this.GetAgentList();
        this.getAgentListByPagination();
        this.showNotification('top', 'right', 'success', 'Agent Add Successfully');
      },
        error => {
          this.spinnerService.hide();
        
          this.showNotification('top', 'right', 'danger', 'Error To Add Agent');

        })
  }

  GetAgentList() {
    this.spinnerService.show();
    this.agentService.getAgentList()
      .subscribe((response) => {
        this.spinnerService.hide();
        if ($.fn.dataTable.isDataTable('#agentdataTable')) {
          $('#agentdataTable').dataTable().fnClearTable();
          $('#agentdataTable').dataTable().fnDestroy();
        }
        console.log(response);
        this.agentGrid = response;
        //Object.assign(this.agentGrid,response);
        this.chRef.detectChanges();
        $("#agentdataTable").dataTable({
          "order": [[0, "desc"]],
          dom: 'lBfrtip',
          buttons: [
            { extend: 'pdf', className: 'mat-raised-button', attr: { id: "pdfBtn" }, exportOptions: { columns: [1, 2, 3, 4] } },
            { extend: 'excel', className: 'mat-raised-button', attr: { id: "excelBtn" }, exportOptions: { columns: [1, 2, 3, 4] } }
          ]
        });
      },
        error => {
          this.spinnerService.hide();
        })
  }


  getAgentListByPagination(){
    debugger
       this.spinnerService.show()
       let pageNo = this.pageNo-1;
       this.pageNo;
       this.itemsPerPage;
      this.agentService.getAgentListByPagination(pageNo,this.itemsPerPage).subscribe((response) =>{
             this.responseObj = response

          this.agentList = this.responseObj.content
          this.agentListLength = this.responseObj.totalElements
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
      let pageNo = this.pageNo-1;
      this.pageNo;
      this.itemsPerPage;
      this.agentService.getAgentListByPagination(pageNo,this.itemsPerPage).subscribe((response) =>{
        this.responseObj = response

        this.agentList = this.responseObj.content
        this.agentListLength = this.responseObj.totalElements
         this.spinnerService.hide()
     },
     error => {
       this.spinnerService.hide();
     }) 
  }

  pageNoChange($event){
    let pageNo = $event-1;
    this.pageNo = $event;
      this.spinnerService.show()
      this.pageNo;
      this.itemsPerPage;
      this.agentService.getAgentListByPagination(pageNo,this.itemsPerPage).subscribe((response) =>{
        this.responseObj = response

        this.agentList = this.responseObj.content
        this.agentListLength = this.responseObj.totalElements
         this.spinnerService.hide()
     },
     error => {
       this.spinnerService.hide();
     }) 
  }

  UpdateDataBind(data) {
    this.agentUpdate = data;
  }

  UpdateAgentSubmit() {
    this.spinnerService.show();
    this.agentService.UpdateAgent(this.agentUpdate)
      .subscribe((response) => {
        if (response) {
          this.spinnerService.hide();
          this.updateFormValue.resetForm();
          this.closeupdateForm.nativeElement.click();
          this.GetAgentList();
          this.getAgentListByPagination();
          this.showNotification('top', 'right', 'success', 'Agent Update Successfully');
        }
        else {
        }
      },
        error => {
          this.spinnerService.hide();
          this.showNotification('top', 'right', 'danger', 'Error to Update Agent');
        })
  }
  

  DeleteDataBind(data) {
    this.agentDelete = data;
  }

  DeleteAgentSubmit() {
    this.spinnerService.show();
    this.agentService.DeleteAgent(this.agentDelete.agentId)
      .subscribe((response) => {
        this.spinnerService.hide();
        this.closedeleteForm.nativeElement.click();
        this.GetAgentList();
        this.getAgentListByPagination();
        this.showNotification('top', 'right', 'success', 'Agent Delete Successfully');


      },
        error => {
          this.spinnerService.hide();
          this.closedeleteForm.nativeElement.click();
          this.GetAgentList();
          this.getAgentListByPagination();
          this.showNotification('top', 'right', 'danger', 'Error To Delete Agent');
        })
  }


  ExportExcel(): void {
    $("#excelBtn").click();
  }

  ExportPdf() {
    $("#pdfBtn").click();
  }

  ViewDataBind(data) {
    this.agentViewData = data;
  }


  addCloseClick() {
    this.addFormValue.resetForm();
  }

  addCancelClick() {
    this.addFormValue.resetForm();
  }

  updateCloseClick() {
    this.agentUpdate = new AgentModel();
    this.GetAgentList();
    this.getAgentListByPagination();
  }

  updateCancelClick() {
    this.agentUpdate = new AgentModel();
    this.GetAgentList();
    this.getAgentListByPagination();
  }

  _keyPress1(event: any) {

    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }

  }

}

