export interface Option {
    optionId: string;
    optionText: string;
}

export interface QuizProps {
    question: string;
    options: Option[];
    correctAnswer: string;
    id?: string;
}

export type QuizList = QuizProps[]

export interface DbSchema {
  username: string;
  quizList: QuizList;
  recordedSessions: RecordedSessions;
}

export interface Answer extends QuizProps {
    givenAnswer: string;
}

export type AnswerList = Answer[]

type RecordedSessions = Session[]

export interface Session {
    sessionAnswers: AnswerList;
    sessionDate: number;
}