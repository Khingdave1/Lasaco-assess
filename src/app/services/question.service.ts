import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) {
  }

  getQuestionJson(jsonName: any) {
    return this.http.get(`assets/data/${jsonName}.json`)
  }
}
