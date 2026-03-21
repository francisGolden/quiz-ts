import { quiz } from "../components/quiz";
import { JSONFilePreset } from "lowdb/node";
import { QuizProps } from "../types/quizTypes";

const defaultData: QuizProps[] = [];

export const quizView = async () => {
    const quizArray = [
        {
            question: "What is the capital of France?",
            options: [
                { optionId: "id1", optionText: "Paris" },
                { optionId: "id2", optionText: "Lyon" },
            ],
            correctAnswer: "id1",
            id: "quiz1",
        },
        {
            question: "What is the largest planet in our solar system?",
            options: [
                { optionId: "id1", optionText: "Jupiter" },
                { optionId: "id2", optionText: "Saturn" },
            ],
            correctAnswer: "id1",
            id: "quiz2",
        },
        {
            question: "Who wrote Romeo and Juliet?",
            options: [
                { optionId: "id1", optionText: "William Shakespeare" },
                { optionId: "id2", optionText: "Jane Austen" },
            ],
            correctAnswer: "id1",
            id: "quiz3",
        },
        {
            question: "What is the chemical symbol for Gold?",
            options: [
                { optionId: "id1", optionText: "Au" },
                { optionId: "id2", optionText: "Gd" },
            ],
            correctAnswer: "id1",
            id: "quiz4",
        },
    ];

    try {
        const {data} = await JSONFilePreset("db.json", []);
        for (const quizData of data.quizList) {
            await quiz(quizData)
        }
    } catch (error) {
        console.log(error);
    }

    console.log("finished the loop!");
};
