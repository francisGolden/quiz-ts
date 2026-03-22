export interface KnowledgeOption {
    optionId: string;
    optionText: string;
}

export interface QuizProps {
    question: string;
    options: KnowledgeOption[];
    correctAnswer: string;
    id: string;
}

export type QuizList = QuizProps[]

export interface DbSchema {
  username: string;
  quizList: QuizList;
}