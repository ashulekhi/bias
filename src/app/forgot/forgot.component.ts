import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  email
  constructor() { }

  ngOnInit() {
  }


  reset(){
    console.log("email" , this.email)
  }

}
