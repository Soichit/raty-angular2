import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ratings!';
  stars1: number;
  stars2: number;
  stars3: number;
  stars4: number;
  stars5: number;

  onSubmit() {
    console.log("Easy to use: " + this.stars1);
    console.log("Overall: " + this.stars5);
  }
}
