import { quiz } from "../components/quiz";
import { JSONFilePreset } from "lowdb/node";
import { DbSchema, Answer, AnswerList } from "../types/quizTypes";
import { dashboardView } from "./dashboardView";


export const quizView = async (): Promise<void> => {
    let results = []; // this should be of type AnswerList
    try {
        const defaultData: DbSchema = { 
            username: "Guest", 
            quizList: [] 
        };
        const { data } = await JSONFilePreset<DbSchema>("db.json", defaultData);
        for (const quizData of data.quizList) {
            const answer = await quiz(quizData);
            results.push(answer); // this should take the right type (Answer)
        }
    } catch (error) {
        console.log(error);
    }

    console.log(
        "correct answers:",
        results.filter((value) => value === 1).length,
        "| wrong answers:",
        results.filter((value) => value === 0).length,
    );
    await dashboardView();
};
