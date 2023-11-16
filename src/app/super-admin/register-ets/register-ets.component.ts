import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/apiservices.service';

@Component({
  selector: 'app-register-ets',
  templateUrl: './register-ets.component.html',
  styleUrls: ['./register-ets.component.scss']
})
export class RegisterEtsComponent implements OnInit{

  constructor(private http: ApiservicesService){}

infouser:any

  ngOnInit(): void {
  }


  read(){
    this.http.getInfo().subscribe({
      next: (responses:any) =>{

        this.infouser = responses
        console.log(this.infouser);

      }
    })
  }

}
