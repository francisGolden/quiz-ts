import { quiz } from "../components/quiz";
import { JSONFilePreset } from "lowdb/node";
import { QuizProps } from "../types/quizTypes";

export const quizView = async () => {
    let results = [];
    try {
        const { data } = await JSONFilePreset("db.json", {});
        for (const quizData of data.quizList) {
            const answer = await quiz(quizData);
            results.push(answer);
        }
    } catch (error) {
        console.log(error);
    }

    console.log(
        "finished the loop!",
        "correct answers:",
        results.filter((value) => value === 1).length,
        "| wrong answers:",
        results.filter((value) => value === 0).length,
    );
};
