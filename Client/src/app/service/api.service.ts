import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable} from 'rxjs/index';
import { ApiResponse } from '../model/api.response';
import { inject } from '@angular/core/testing';

@Injectable()
export class ApiService {

    constructor( private http : HttpClient){}
    loginUrl: string = 'https://angular-1.azurewebsites.net/loginInfo/';
    baseUrl: string = 'https://angular-1.azurewebsites.net/users/';
    deleteUrl: string = 'https://angular-1.azurewebsites.net/deleteUser/';

    getUsers() : Observable<ApiResponse>{
        return this.http.get<ApiResponse>(this.baseUrl)
    }

    addUser(user:User) :Observable<ApiResponse>{
        return this.http.post<ApiResponse>(this.baseUrl,user)

    }
    loginUser(user:User) :Observable<ApiResponse>{
        return this.http.post<ApiResponse>(this.loginUrl,user)

    }
    editUser(id:any) :Observable<ApiResponse>{
        return this.http.get<ApiResponse>(this.baseUrl + id)
  
    }
    updateUser(user:User) :Observable<ApiResponse>{
        return this.http.put<ApiResponse>(this.baseUrl + user.id,user)
  
    }
    deleteUser(id:any) :Observable<ApiResponse>{
        return this.http.get<ApiResponse>(this.deleteUrl + id)
  
    }

}
