import { quiz } from "../components/quiz";
import { JSONFilePreset } from "lowdb/node";
import { DbSchema, AnswerList } from "../types/quizTypes";
import { dashboardView } from "./dashboardView";


export const quizView = async (): Promise<void> => {
    let results: AnswerList = []; // this should be of type AnswerList
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

    console.log(results) // here I should call an async function that takes in the AnswerList array and pushes it into the database
    await dashboardView();
};
