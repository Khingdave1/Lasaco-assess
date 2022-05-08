import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from 'src/app/services/question.service';
import { interval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-level-questions',
  templateUrl: './entry-level-questions.component.html',
  styleUrls: ['./entry-level-questions.component.css']
})
export class EntryLevelQuestionsComponent implements OnInit {

  public allQuestionsList: any = [];
  public questionsList: any = [];
  public result: any;
  public currentQuestion: number = 0;
  public pointValue: number = 10;
  public points: number = 0;
  public totalPoints: number = 0;
  public pointsPercentage: number = 0;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  selected: boolean = false;
  isTestCompleted: boolean = false;
  totalAttemptedQuestion: number = 0;
  testDuration: number = 1800; //In seconds
  testDurationMinute: number = 30;
  display: any;
  interval: any;

  constructor(private http: HttpClient, private questionService: QuestionService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllQuestions()
    this.startTimer()

  }

  // Get all Questions from Json
  getAllQuestions() {
    this.questionService.getQuestionJson().subscribe((res) => {
      this.result = res

      // Number of Questions
      const size = 5
      this.allQuestionsList = this.result.questions;
      // Display n random questions from the QuestionList
      this.questionsList = this.allQuestionsList.sort(() => Math.random() - Math.random()).slice(0, size)
      // Total points
      this.totalPoints = this.questionsList.length * this.pointValue
    });
  }

  // When User select an answer
  answer(currentQno: number, option: any) {
    // If last question
    if (currentQno === this.questionsList.length) {
      this.currentQuestion--
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++
      this.currentQuestion++
      // this.resetCounter()
      // setTimeout(() => {
      // }, 1000);
      // this.totalAttemptedQuestion++

    } else {
      this.currentQuestion++
      this.inCorrectAnswer++
      // this.resetCounter()
      // setTimeout(() => {
      // }, 1000);
      // this.point -= 10
    }
    this.totalAttemptedQuestion++
  }

  // Next Question
  nextQuestion() {
    this.currentQuestion++

  }

  // Previous Question
  previousQuestion() {
    this.currentQuestion--
  }

  // Submit Test
  submitTest() {
    this.isTestCompleted = true
    this.pauseTimer()
    this.pointsPercentage = (this.points / this.totalPoints) * 100
    // Route back to home page
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 30000);
  }

  // Start Timer
  startTimer() {
    this.interval = setInterval(() => {
      if (this.testDuration !== 0) {
        this.testDuration--;
      } else {
        this.isTestCompleted = true
        this.pauseTimer()
        this.submitTest()
      }
      this.display = this.transform(this.testDuration)
    }, 1000);
  }
  // Transform the time from seconds to Minutes : seconds
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + ':' + (value - minutes * 60);
  }
  // Pause Timer
  pauseTimer() {
    clearInterval(this.interval);
    this.testDuration = 0
  }

  // Reset Counter
  // resetCounter() {
  //   this.stopCounter()
  //   this.counter = 1800
  //   this.startCounter()
  // }
  // Reset Quiz
  // resetQuiz() {
  //   this.resetCounter()
  //   this.getAllQuestions()
  //   this.point = 0
  //   this.counter = 1800
  //   this.currentQuestion = 0
  // }
}
