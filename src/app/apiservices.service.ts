import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private api: HttpClient) { }

  getInfo(){
    return this.api.get("https://api.agify.io?name[]=michael&name[]=matthew&name[]=jane")
  }

}
