import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Globals } from '../../global';
import { CustomerModel } from '../model/customer.model';

@Injectable({
    providedIn: 'root'
})

export class JobSeekerService {

    constructor(private httpclient: HttpClient, private global: Globals) { }

    getJobSeekerList(verificationStatus, index) {

        // ?verificationStatus=2&index=0
        const httpParams = new HttpParams()
            .set('verificationStatus', verificationStatus)
            .set('index', index);

        return this.httpclient.get(this.global.HOST_URL + this.global.URLs.JobSeeker, { params: httpParams });
    }

    updateVerifactionStatus(id, status) {
        const data = {
            'id': id,
            'verificationStatus': status
        }
        return this.httpclient.post(this.global.HOST_URL + this.global.URLs.UpdateJobSeekerVerificationStatus, data);



    }


}