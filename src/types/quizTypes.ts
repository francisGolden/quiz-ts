export interface KnowledgeOption {
    optionId: string;
    optionText: string;
}

export interface QuizProps {
    question: string;
    options: KnowledgeOption[];
    correctAnswer: string;
    id?: string;
}

export type QuizList = QuizProps[]

export interface DbSchema {
  username: string;
  quizList: QuizList;
}

export interface Answer extends QuizProps {
    givenAnswer: string;
}

export type AnswerList = Answer[]