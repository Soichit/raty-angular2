import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RatingModule } from "ng2-rating";
import { HttpService } from "./http.service";



import { AppComponent } from './app.component';
import { RatingsComponent } from './ratings/ratings.component';
import { Feedback1Component } from './feedback1/feedback1.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingsComponent,
    Feedback1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RatingModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
