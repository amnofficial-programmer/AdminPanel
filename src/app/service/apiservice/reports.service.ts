import {Injectable} from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Globals } from '../../global';

@Injectable({
    providedIn:'root'
})

export class ReportsService{
    constructor(private httpclient:HttpClient, private global: Globals){}
    getCustomerPaymentReport(data) {
        debugger      
        let entity = {
            "fromDate": data.fromDate,
            "toDate": data.toDate
          }
        return this.httpclient.post(this.global.G_apiUrl + "/web/transation_report/fromto", entity);
    }
    getCustomerDueReport(data) {
        return this.httpclient.get(this.global.G_apiUrl + "/web/customer-due-by-id?customerId="+data.customerId);
    }
    
}
