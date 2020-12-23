import {Injectable} from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Globals } from '../../global';
import { Login } from '../model/login';

@Injectable({
    providedIn:'root'
})

export class LoginService{

    constructor(private httpclient:HttpClient,private global:Globals){}

    isBlocked(){
        return this.httpclient.get(this.global.G_apiUrl+"/society/check/isblocked");
    }
    

    LoginAdmin(login:Login){
        return this.httpclient.post(this.global.G_apiUrl+"/web/admin/login?mobileNo="+login.email+"&password="+login.password,{});
    }


    getRoleList()
    {
        //return this.httpclient.get(this.global.G_apiUrl+"/building");
        return this.httpclient.get(this.global.G_apiUrl+"/admin");
    }


    getForgotPassWord(buildingId:number){
        return this.httpclient.get(this.global.G_apiUrl+"/admin/forgotpassword?loginBy="+buildingId);
    }
}