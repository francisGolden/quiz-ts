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