import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  jsonDataResult: any;

  constructor(private http: HttpClient) {
    this.http.get('assets/data/itquestionjson.json').subscribe((res) => {
      this.jsonDataResult = []
      this.jsonDataResult = res;
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
