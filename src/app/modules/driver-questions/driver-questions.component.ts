import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-driver-questions',
  templateUrl: './driver-questions.component.html',
  styleUrls: ['./driver-questions.component.css']
})
export class DriverQuestionsComponent implements OnInit {

  questions: any;

  constructor(private http: HttpClient) {
    this.http.get('assets/data/itquestionjson.json').subscribe((res) => {
      this.questions = []
      this.questions = res;
      // res.forEach((r: any) => {
      //   let item = r.timeSlots
      //   item.forEach((i: any) => {
      //     this.schedules.push(i)
      //   });
      // });
    });
  }

  ngOnInit(): void {
  }

}
