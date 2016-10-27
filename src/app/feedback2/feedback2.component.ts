import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-feedback2',
  templateUrl: './feedback2.component.html',
  styleUrls: ['./feedback2.component.css']
})
export class Feedback2Component implements OnInit {
  stars1: number = 0;
  stars2: number = 0;
  stars3: number = 0;
  showPopup: boolean = false;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
  }


  onSubmit() {
    console.log("stars1: " + this.stars1);
   
    // this.httpService.sendData({ "user": { username: "Soichi", email: "test@gmail.com" },
    //   "ratings": { rating1: this.stars1, rating2: this.stars2, rating3: this.stars3, rating4: this.stars4, rating5: this.stars5} 
    // }).subscribe(
    //   data => console.log(data),
    //   error => console.log(error)
    // );
    this.reset();
    this.showPopup = true;
  }

  reset() {
    this.stars1 = 0;
    this.stars2 = 0
    this.stars3 = 0;
  }

    dismissDialog() {
      this.showPopup = false;
    }
}

