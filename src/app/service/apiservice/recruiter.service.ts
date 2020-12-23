import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Globals } from '../../global';
import { CustomerModel } from '../model/customer.model';

@Injectable({
    providedIn: 'root'
})

export class RecruiterService {

    constructor(private httpclient: HttpClient, private global: Globals) { }

    getRecruiterList(verificationStatus,index) {
          // ?verificationStatus=2&index=0
        const httpParams =new HttpParams()
        .set('verificationStatus',verificationStatus)
        .set('index', index);
        return this.httpclient.get(this.global.HOST_URL + this.global.URLs.Recuriter,{params:httpParams});
    }
    updateVerifactionStatus(id, status) {
        const data = {
            'id': id,
            'verificationStatus': status
        }
        return this.httpclient.post(this.global.HOST_URL + this.global.URLs.UpdateRecuriterVerificationStatus, data);



    }
}