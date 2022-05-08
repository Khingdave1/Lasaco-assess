export interface Profile {
  id?: any;
  emailAddress: string;
  fullName: string;
  telNumber: number;
  role: string;
  testScore: number,
  totalQuestionsAttempted: number,
  totalCorrectAnswered: number,
  totalWrongAnswered: number,
  scorePercentage: number,
  imageUrl: string;
  uid: string;
}
