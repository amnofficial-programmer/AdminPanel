import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Globals } from '../../global';
import { ResponseModel } from '../model/server_response.model';

@Injectable({
    providedIn: 'root'
})

export class DashboardService {

    constructor(private httpclient: HttpClient, private global: Globals) { }

    getDashboardDetailsRecuriter() {
        return this.httpclient.get<ResponseModel>(this.global.HOST_URL+this.global.URLs.DashboardRecuriterGellAll);

    }
    getDashboardDetailsJobSeeker() {
        return this.httpclient.get<ResponseModel>(this.global.HOST_URL+this.global.URLs.DashboardJobseekerGetAll);

    }
   
}