import { Component, OnInit } from '@angular/core';
import { Login } from '../service/model/login';
import { LoginService } from '../service/apiservice/login.service';
import { Router } from '@angular/router';
import { Globals } from '../global';
// import { building } from 'app/service/model/building';
import { NgxSpinnerService } from 'ngx-spinner';
//import { InfoWindowManager } from '@agm/core';
declare var $

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  //roleDropDown:building[]=[];
  roleDropDown:any;
  loginResponse: any;
  flagShow: boolean;
  building: any;
  blocked: any;

  constructor(private loginService: LoginService, private router: Router,
    private global:Globals,private spinnerService: NgxSpinnerService) { }
    showNotification(from, align, color,message){
     
      // type = ['','info','success','warning','danger'];
      // const color = Math.floor((Math.random() * 4) + 1);

      $.notify({
          icon: "notifications",
          message: message

      },{
          type: color,
          timer: 4000,
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
  
  }
  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();

    }
}

isBlocked(){
  debugger
  this.spinnerService.show();
  this.loginService.isBlocked()
  .subscribe((response)=>
  {
    this.blocked = response;   
    if( this.blocked == 0){
      this.spinnerService.hide();
    }else{
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinnerService.hide();
      }, 1000);
      this.router.navigate(['blockedPage']);
    }
    
    


  },
  error=>
  {
   
  })
}
  
 

  LoginSubmit() {
    
   debugger
   this.loginResponse = {
     message : 'Login Successfully',
   }
    
    if (this.login.email == 'admin@gmail.com' && this.login.password == 'admin' ) {
      this.spinnerService.show();
      this.router.navigate(['dashboard']);
      // localStorage.setItem('roleId',this.login.roleId.toString());
      localStorage.setItem('userdetail',JSON.stringify( this.loginResponse));
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('LoggedInStatus', "1");
      // setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinnerService.hide();
      // }, 2000);
      this.showNotification('top', 'right', 'success', 'Login Successfully');

    } else {
      this.spinnerService.show();
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinnerService.hide();
      }, 2000);
      this.showNotification('top', 'right', 'danger', 'Please Check Cridencials');
    }






  this.spinnerService.show();







  // this.loginService.LoginAdmin(this.login)
  //   .subscribe((response) => {
    
  //     if (response) {
  //       this.router.navigate(['dashboard']);
  //       this.loginResponse = response
  //      // localStorage.setItem('roleId',this.login.roleId.toString());
  //       localStorage.setItem('userdetail',JSON.stringify( this.loginResponse));
  //       localStorage.setItem('isLoggedIn', "true");
  //       localStorage.setItem('LoggedInStatus', "1");
       
       
  //       setTimeout(() => {
  //         /** spinner ends after 5 seconds */
  //         this.spinnerService.hide();
  //       }, 1000);
  //       this.showNotification('top','right','success','Login Successfully');
  //       $("#errlogin").html("");
  //      }
  //   },
  //     error => {
       
  //       $("#errlogin").html(error.error);
  //       this.flagShow =true;
  //       //alert(error.error);
  //       this.spinnerService.hide();
  //     })











    // this.login;
    // //this.login.roleId = 1;

    // this.spinnerService.show();
    // this.loginService.Login(this.login)
    //   .subscribe((response) => {
      
    //     if (response) {
    //       this.router.navigate(['dashboard']);
    //      // console.log(response);
    //       this.loginResponse = response;
    //       this.loginResponse.password ="";
          
    //       localStorage.setItem('roleId',this.login.roleId.toString());
    //       localStorage.setItem('userdetail',JSON.stringify( this.loginResponse));







    //     //   if(this.loginResponse.building == null ){
    //     //     this.global.loggedUser.adminBuildingId = this.loginResponse.adminBuildingId;
           
    //     //   }else{
    //     //     this.global.loggedUser.adminBuildingId = this.login.roleId;
    //     //   }
         
    //     //   this.global.loggedUser.adminId   = this.loginResponse.adminId;
    //     //   this.global.loggedUser.createdAt = this.loginResponse.createdAt;
    //     //   this.global.loggedUser.email     = this.loginResponse.email;
    //     //   this.global.loggedUser.mobile    = this.loginResponse.mobile;
    //     //   this.global.loggedUser.name      = this.loginResponse.name;
    //     //  // this.global.loggedUser.password  = this.loginResponse.password;
    //     //   this.global.loggedUser.pic       = this.loginResponse.pic;
    //     //   this.global.loggedUser.status    = this.loginResponse.status;
    //     //   this.global.loggedUser.updatedAt = this.loginResponse.updatedAt;
    //     //   if(this.loginResponse.building == null ){

    //     //   }else{
    //     //     this.global.loggedUser.building   = this.loginResponse.building;
    //     //   }
          

    //     // this.global.loggedUser

    //     // // localStorage.setItem('roleId',this.login.roleId.toString());
    //      // localStorage.setItem('userdetail',JSON.stringify(this.global.loggedUser));
    //       localStorage.setItem('isLoggedIn', "true");
    //       localStorage.setItem('LoggedInStatus', "1");
         
         
    //       setTimeout(() => {
    //         /** spinner ends after 5 seconds */
    //         this.spinnerService.hide();
    //       }, 1000);
    //       this.showNotification('top','right','success','Login Successfully');
    //       $("#errlogin").html("");
    //      }
    //   },
    //     error => {
         
    //       $("#errlogin").html(error.error);
    //       this.flagShow =true;
    //       //alert(error.error);
    //       this.spinnerService.hide();
    //     })
  }



  getForgotPassWord(){
    debugger
    this.spinnerService.show();
    this.login.roleId
   // this.building[0].buildingId;
    this.loginService.getForgotPassWord(this.login.roleId)
      .subscribe((response) => {
        this.showNotification('center','center','success','Login Details Send On Your Registered Email And Mobile Number');
        this.spinnerService.hide();
      },
        error => {
          this.spinnerService.hide();
        })

  }
  
rememberMe(event){
  
  if(event.target.checked){
    localStorage.setItem('rememberMe','rememberMe');
  }else{
    localStorage.setItem('rememberMe','');
  }
}
}




