import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Globals } from '../../global';
import { CustomerModel } from '../model/customer.model';

@Injectable({
    providedIn: 'root'
})

export class CustomerService {

    constructor(private httpclient: HttpClient, private global: Globals) { }

    getCustomerList() {
        return this.httpclient.get(this.global.G_apiUrl + "/web/customer");
    }

    getCustomerListByPagination(pageNo,pageSize) {
        return this.httpclient.get(this.global.G_apiUrl + "/web/customers/customer-list-pagination"+'?pageNo='+pageNo+'&pageSize='+pageSize);
    }


    AddCustomer(customer:CustomerModel) {
        debugger
   
    
       let entity = {
            "activeStatus": customer.activeStatus,
            "addressOfBusiness": customer.addressOfBusiness,
            // "agent": {
            //   "activeStatus": true,
            //   "agentId": 0,
            //   "createdAt": "2020-11-06T13:11:22.921Z",
            //   "mobileNo": "string",
            //   "name": "string",
            //   "password": "string",
            //   "updatedAt": "2020-11-06T13:11:22.921Z"
            // },
            "currentAddress": customer.currentAddress,
            "customerId": 0,
            "firmName": customer.firmName,
            "loanAmount": customer.loanAmount,
            "mobileNo": customer.mobileNo,
            "nameOfApplicant": customer.nameOfApplicant,
            "nameOfBusiness": customer.nameOfBusiness,
            "otherName": customer.otherName,
            "repayment": customer.repayment,
            'repaymentAmount': customer.repaymentAmount,
            "residentialAddress": customer.residentialAddress,
            "openingDueAmount": customer.openingDueAmount
          }
        
        return this.httpclient.post(this.global.G_apiUrl + '/web/customer',entity);
    }

    UpdateCustomer(customer:CustomerModel) {
        let entity = {
            "activeStatus": customer.activeStatus,
            "addressOfBusiness": customer.addressOfBusiness,
            "agent": customer.agent,
            "currentAddress": customer.currentAddress,
            "customerId": customer.customerId,
            "firmName": customer.firmName,
            "loanAmount": customer.loanAmount,
            "mobileNo": customer.mobileNo,
            "nameOfApplicant": customer.nameOfApplicant,
            "nameOfBusiness": customer.nameOfBusiness,
            "otherName": customer.otherName,
            "repayment": customer.repayment,
            'repaymentAmount': customer.repaymentAmount,
            "residentialAddress": customer.residentialAddress,
            "openingDueAmount": customer.openingDueAmount
          }
        return this.httpclient.put(this.global.G_apiUrl + '/web/customer',customer);
    }

    DeleteCustomer(customerId) {
        return this.httpclient.delete(this.global.G_apiUrl + "/web/customer/" + customerId,{responseType:'text'});
    }

    GetCustomer(customerId: any) {
        return this.httpclient.get(this.global.G_apiUrl + "/web/customer/" + customerId);
    }



    selectedCustomerAssign(list){

        return this.httpclient.post(this.global.G_apiUrl + '/web/customer/save-customer-list-with-agent',list);

        
    }
}