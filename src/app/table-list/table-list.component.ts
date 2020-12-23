import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $;

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  @ViewChild('dataTable', {static:false}) table;
  dataTable:any;
  constructor() { }

  ngOnInit() {
    this.dataTable=$(this.table.nativeElement);
    this.dataTable.dataTable();
  }
}
