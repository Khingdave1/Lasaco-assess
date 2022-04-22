import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-intern-questions',
  templateUrl: './intern-questions.component.html',
  styleUrls: ['./intern-questions.component.css']
})
export class InternQuestionsComponent implements OnInit {

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
