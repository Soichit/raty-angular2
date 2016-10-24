import { Component } from '@angular/core';
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ratings!';
  stars1: number = 0;
  stars2: number = 0;
  stars3: number = 0;
  stars4: number = 0;
  stars5: number = 0;

  constructor(private httpService: HttpService) {}

  onSubmit() {
    console.log("Easy to use: " + this.stars1);
   
    this.httpService.sendData( {"user": {username: "Soichi", email: "soichi@gmail.com"},
      "ratings": { rating1: this.stars1, rating2: this.stars2, rating3: this.stars3, rating4: this.stars4, rating5: this.stars5} })
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );
  }
}
