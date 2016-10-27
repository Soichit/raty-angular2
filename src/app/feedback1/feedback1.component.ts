import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-feedback1',
  templateUrl: './feedback1.component.html',
  styleUrls: ['./feedback1.component.css']
})
export class Feedback1Component implements OnInit {
  stars1: number = 0;
  stars2: number = 0;
  stars3: number = 0;
  stars4: number = 0;
  stars5: number = 0;
  showPopup: boolean = false;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
  }


  onSubmit() {
    console.log("Easy to use: " + this.stars1);
   
    this.httpService.sendData({ "user": { username: "Soichi", email: "test@gmail.com" },
      "ratings": { rating1: this.stars1, rating2: this.stars2, rating3: this.stars3, rating4: this.stars4, rating5: this.stars5} 
    }).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.reset();
    this.showPopup = true;
  }

  reset() {
    this.stars1 = 0;
    this.stars2 = 0
    this.stars3 = 0;
    this.stars4 = 0;
    this.stars5 = 0;
  }

    dismissDialog() {
      this.showPopup = false;
    }
}

