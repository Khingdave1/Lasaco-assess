import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from 'src/app/services/question.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/interfaces/profile';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-intern-questions',
  templateUrl: './intern-questions.component.html',
  styleUrls: ['./intern-questions.component.css']
})
export class InternQuestionsComponent implements OnInit {

  public allQuestionsList: any = [];
  public questionsList: any = [];
  public result: any;
  public currentQuestion: number = 0;
  public pointValue: number = 10;
  public points: number = 0;
  public totalPoints: number = 0;
  public pointsPercentage: number = 0;
  public timeStamp: any;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  selected: boolean = false;
  isTestCompleted: boolean = false;
  totalAttemptedQuestion: number = 0;
  testDuration: number = 3600; //In seconds
  testDurationMinute: number = 1;
  display: any;
  interval: any;
  userId: any;
  users: any;
  user: any;

  constructor(private http: HttpClient, private questionService: QuestionService, private router: Router, private profileService: ProfileService, private firebaseService: FirebaseService) {
  }

  ngOnInit(): void {
    this.getAllQuestions()
    this.startTimer()

    // Get single User Informations
    this.userId = JSON.parse(localStorage.getItem('id') || '{}')
    this.users = this.profileService.getSingleUser(this.userId).subscribe((res: any) => {
      res.forEach((r: any) => {
        let item = r.payload.doc.data() as Profile
        item.id = r.payload.doc.id
        this.user = item
      });
    })

  }

  // Get all Questions from Json
  getAllQuestions() {
    this.questionService.getQuestionJson('itquestion').subscribe((res) => {
      this.result = res

      // Number of Questions
      const size = 50
      this.allQuestionsList = this.result.questions;
      // Display n random questions from the QuestionList
      this.questionsList = this.allQuestionsList.sort(() => Math.random() - Math.random()).slice(0, size)
      // Total points
      this.totalPoints = this.questionsList.length * this.pointValue
    });
  }

  // When User select an answer
  answer(currentQno: number, option: any, event: any) {
    // var element = event.currentTarget;
    // element.classList.add("selected")
    // If last question
    if (currentQno === this.questionsList.length) {
      this.currentQuestion--
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++
      // this.resetCounter()
      setTimeout(() => {
        this.currentQuestion++
      }, 1000);
      // this.totalAttemptedQuestion++

    } else {
      this.inCorrectAnswer++
      // this.resetCounter()
      setTimeout(() => {
        this.currentQuestion++
      }, 1000);
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
    this.pointsPercentage = Math.floor((this.points / this.totalPoints) * 100)

    // Update user profile
    this.updateUserProfile()

    // Route back to home page
    setTimeout(() => {
      this.logOut()
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
    const hour: number = Math.floor(value / 3600)
    const minutes: number = Math.floor(((value - (hour * 3600)) / 60));
    return hour + ':' + minutes + ':' + (value - (hour * 3600) - (minutes * 60));
  }
  // Pause Timer
  pauseTimer() {
    clearInterval(this.interval);
    this.testDuration = 0
  }

  // Update User profile
  updateUserProfile() {
    // Get current timestamp
    const currTime = Number(new Date())

    // Convert timestamp into readable time string
    const readableTime = new Date(currTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) //Display without seconds

    // Convert timestamp into readable date string
    const readableDate = new Date(currTime).toDateString()

    this.timeStamp = readableDate + ', ' + readableTime

    let payload = {
      testScore: this.points,
      totalQuestionsAttempted: this.totalAttemptedQuestion,
      totalCorrectAnswered: this.correctAnswer,
      totalWrongAnswered: this.inCorrectAnswer,
      scorePercentage: this.pointsPercentage,
      timeStamp: this.timeStamp
    }

    this.profileService.updateUser(this.user.id, payload).then(res => {
    }).catch(err => {
      console.log(err)
    })
  }

  // Sign User Out
  logOut() {
    this.firebaseService.signout()

    // Return to Home page
    this.router.navigate(['/'])
  }

}
