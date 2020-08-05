import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  roles:Array<string>=['ADMIN','SECRETAIRE','INFIRMIERE','MEDECIN'];
  user:any;
  // host:string="http://localhost:8888";
  constructor(private http:HttpClient) { }
  //login(data):Observable<any>{
   // return this.http.post(this.host,data,{observe:'response'})
  //}


  getRole(user:any){
    localStorage.setItem("key",JSON.stringify(user))
    }
    getUser(){
      return localStorage.getItem("key");

    }
}
