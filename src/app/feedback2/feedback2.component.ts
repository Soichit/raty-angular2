import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import {FormArray, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-feedback2',
  templateUrl: './feedback2.component.html',
  styleUrls: ['./feedback2.component.css']
})

export class Feedback2Component implements OnInit {
  showPopup: boolean = false;
  public feedbackForm: FormGroup;

  constructor(private httpService: HttpService) {
    this.feedbackForm = new FormGroup({
      'stars1': new FormControl(),
      'stars2': new FormControl(),
      'stars3': new FormControl(),
      'input1': new FormControl(),
      'input2': new FormControl(),
      'input3': new FormControl()
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    //console.log("star: " + this.feedbackForm.value.stars1)
    
    //if users leave fields blank
    let stars1 = 0
    let stars2 = 0;
    let stars3 = 0;
    let input1 = 'blank';
    let input2 = 'blank';
    let input3 = 'blank';

    stars1 = this.feedbackForm.value.stars1;
    stars2 = this.feedbackForm.value.stars2;
    stars3 = this.feedbackForm.value.stars3;
    input1 = this.feedbackForm.value.input1;
    input2 = this.feedbackForm.value.input2;
    input3 = this.feedbackForm.value.input3;

    //user info probably unneeded
    this.httpService.sendData({ "user": { username: "Soichi", email: "test@gmail.com" },
      "stars": { rating1: stars1, rating2: stars2, rating3: stars3 },
      "textfield": { input1: input1, input2: input2, input3: input3 },
    }).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.reset();
    this.showPopup = true;
  }

  reset() {
    this.feedbackForm.reset();
  }

    dismissDialog() {
      this.showPopup = false;
    }
}

