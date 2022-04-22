import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entry-level-questions',
  templateUrl: './entry-level-questions.component.html',
  styleUrls: ['./entry-level-questions.component.css']
})
export class EntryLevelQuestionsComponent implements OnInit {

  questions: any;

  constructor(private http: HttpClient) {
    this.http.get('assets/data/nyscquestionjson.json').subscribe((res) => {
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
