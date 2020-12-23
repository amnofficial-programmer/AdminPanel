import { Injectable } from '@angular/core';
Injectable()
@Injectable()
export class Globals {
   G_apiUrl: '';
   HOST_URL = 'http://macrax-admin-app-api-test.ap-south-1.elasticbeanstalk.com/'
   // HOST_URL:'http://localhost:8090/macrax/',

   URLs: any = {

      Recuriter: 'recruiter/list',
      JobSeeker: 'jobseeker/list',
    
RecuriterSearchByDate:'recruiter/list?date=2020-10-11~2020-10-15&index=1',
JobSeekerSearchByDate:'jobseeker/list?date=2020-10-11~2020-10-15&index=1',

RecuriterSearchByStatus:'recruiter/list?verificationStatus=0&index=1',
JobSeekerSearchByStatus:'jobseeker/verificationStatus=0&index=1',

      RecuriterGetById: 'http://macrax-admin-app-api-test.ap-south-1.elasticbeanstalk.com/recruiter/getById/2',
      JobSeekerGetById: 'http://macrax-admin-app-api-test.ap-south-1.elasticbeanstalk.com/jobseeker/getById/10',
     
      UpdateJobSeekerVerificationStatus: 'jobseeker/update',
      UpdateRecuriterVerificationStatus: 'recruiter/update',

      DashboardRecuriterGellAll: 'recruiter/get/all/records',
      DashboardJobseekerGetAll: 'jobseeker/get/all/records'
   }
}
// <mat-icon> insert_photo</mat-icon>
// <mat-icon>image</mat-icon>
// <mat-icon>photo</mat-icon>
// <mat-icon>picture_as_pdf</mat-icon>
// <mat-icon>switch_video</mat-icon>



// http://macrax-admin-app-api-test.ap-south-1.elasticbeanstalk.com/jobseeker/list?verificationStatus=2&index=0

// {
//    "data": [
//    {
//    "id": 10,
//    "uid": 8,
//    "fullName": "ABCS",
//    "profileUrl": "abc",
//    "college": "NIIT",
//    "department": "Computer",
//    "degree": "bca",
//    "experience": "0-3",
//    "companyName": "xyz",
//    "expected_salary": "2l",
//    "vedioUrl": "pqr",
//    "docUrl": "stuv",
//    "verificationCardUrl": "wxyz",
//    "verificationCardId": "1",
//    "verificationStatus": "2",
//    "deleteStatus": "1",
//    "addDateTime": "2020-11-12T00:00:00.000+00:00",
//    "updateDateTime": "2020-11-12T00:00:00.000+00:00"
//    },
//    {
//    "id": 11,
//    "uid": 8,
//    "fullName": "ABCS",
//    "profileUrl": "abc",
//    "college": "NIIT",
//    "department": "Computer",
//    "degree": "bca",
//    "experience": "0-3",
//    "companyName": "xyz",
//    "expected_salary": "2l",
//    "vedioUrl": "pqr",
//    "docUrl": "stuv",
//    "verificationCardUrl": "wxyz",
//    "verificationCardId": "1",
//    "verificationStatus": "2",
//    "deleteStatus": "1",
//    "addDateTime": "2020-11-12T00:00:00.000+00:00",
//    "updateDateTime": "2020-11-12T00:00:00.000+00:00"
//    }
//    ],
//    "succ": true,
//    "msg": "SUCCESS",
//    "code": 0,
//    "totalPages": 3,
//    "totalRecords": 6,
//    "status": 200
   // }




   // http://macrax-admin-app-api-test.ap-south-1.elasticbeanstalk.com/jobseeker/getById/10
   // {
   //    "data": {
   //    "id": 10,
   //    "uid": 8,
   //    "fullName": "ABCS",
   //    "profileUrl": "abc",
   //    "college": "NIIT",
   //    "department": "Computer",
   //    "degree": "bca",
   //    "experience": "0-3",
   //    "companyName": "xyz",
   //    "expected_salary": "2l",
   //    "vedioUrl": "pqr",
   //    "docUrl": "stuv",
   //    "verificationCardUrl": "wxyz",
   //    "verificationCardId": "1",
   //    "verificationStatus": "2",
   //    "deleteStatus": "1",
   //    "addDateTime": "2020-11-12T00:00:00.000+00:00",
   //    "updateDateTime": "2020-11-12T00:00:00.000+00:00"
   //    },
   //    "succ": true,
   //    "msg": "SUCCESS",
   //    "code": 0,
   //    "totalPages": 0,
   //    "totalRecords": 0,
   //    "status": 200
   //    }



   // http://macrax-admin-app-api-test.ap-south-1.elasticbeanstalk.com/recruiter/get/all/records?verificationStatus=1

   // {
   //    "data": 2,
   //    "succ": true,
   //    "msg": "SUCCESS",
   //    "code": 0,
   //    "totalPages": 0,
   //    "totalRecords": 0,
   //    "status": 200
   //    }


   // http://macrax-admin-app-api-test.ap-south-1.elasticbeanstalk.com/jobseeker/get/all/records?verificationStatus=1

   // {
   //    "data": 4,
   //    "succ": true,
   //    "msg": "SUCCESS",
   //    "code": 0,
   //    "totalPages": 0,
   //    "totalRecords": 0,
   //    "status": 200
   //    }


   // http://macrax-admin-app-api-test.ap-south-1.elasticbeanstalk.com/recruiter/getById/2


   // {
   //    "data": {
   //    "id": 2,
   //    "uid": 8,
   //    "fullName": "ABCS",
   //    "profileUrl": "abc",
   //    "companyName": "xyz",
   //    "jobRole": "Developer",
   //    "verificationCardUrl": "wxyz",
   //    "verificationCardId": "1",
   //    "verificationStatus": "0",
   //    "deleteStatus": "0",
   //    "addDateTime": "2020-11-12T00:00:00.000+00:00",
   //    "updateDateTime": "2020-11-12T00:00:00.000+00:00"
   //    },
   //    "succ": true,
   //    "msg": "SUCCESS",
   //    "code": 0,
   //    "totalPages": 0,
   //    "totalRecords": 0,
   //    "status": 200
   //    }