import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from 'src/app/services/question.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-entry-level-questions',
  templateUrl: './entry-level-questions.component.html',
  styleUrls: ['./entry-level-questions.component.css']
})
export class EntryLevelQuestionsComponent implements OnInit {

  public questionsList: any = [];
  public result: any;
  public currentQuestion: number = 0;
  public point: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;

  constructor(private http: HttpClient, private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.getAllQuestions()
    this.startCounter()
  }

  // Get all Questions from Json
  getAllQuestions() {
    this.questionService.getQuestionJson().subscribe((res) => {
      this.result = res

      this.questionsList = this.result.questions;
    });
  }

  // When User select an answer
  answer(currentQno: number, option: any) {
    if (option.correct) {
      this.point += 10;

      this.correctAnswer++
      this.currentQuestion++
      this.resetCounter()
    } else {
      this.point -= 10
      this.currentQuestion++
      this.inCorrectAnswer++
      this.resetCounter()
    }
  }

  // Next Question
  nextQuestion() {
    this.currentQuestion++

  }
  // Previous Question
  previousQuestion() {
    this.currentQuestion--
  }

  // Start Counter
  startCounter() {
    this.interval$ = interval(1000).subscribe(val => {
      this.counter--
      // if (this.counter === 0) {
      //   this.currentQuestion++
      //   this.counter = 60
      //   this.point -= 10
      // }
    })
    setTimeout(() => {
      this.interval$.unsubscribe()
    }, 600000);

  }
  // Stop Counter
  stopCounter() {
    this.interval$.unsubscribe()
    this.counter = 0
  }
  // Reset Counter
  resetCounter() {
    this.stopCounter()
    this.counter = 60
    this.startCounter()
  }
  // Reset Quiz
  resetQuiz() {
    this.resetCounter()
    this.getAllQuestions()
    this.point = 0
    this.counter = 60
    this.currentQuestion = 0
  }
}
