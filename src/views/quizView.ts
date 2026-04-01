import { quiz } from "../components/quiz";
import { JSONFilePreset } from "lowdb/node";
import { DbSchema, AnswerList, Session } from "../types/quizTypes";
import { dashboardView } from "./dashboardView";

const defaultData: DbSchema = { 
    username: "Guest", 
    quizList: [],
    recordedSessions: []
};

const addToPreviousSessions = async (test: AnswerList) => {
    const db = await JSONFilePreset<DbSchema>("db.json", defaultData)
    console.log(test)
    const ts = Date.now()

    const session: Session = {
        sessionAnswers: test,
        sessionDate: ts
    }
    await db.update((data) => {
        data.recordedSessions.push(session)
    })
}

export const quizView = async (): Promise<void> => {
    let results: AnswerList = []; 
    try {

        const { data } = await JSONFilePreset<DbSchema>("db.json", defaultData);
        for (const quizData of data.quizList) {
            const answer = await quiz(quizData);
            results.push(answer);
        }
        
    } catch (error) {
        console.log(error);
    }

    try {
        await addToPreviousSessions(results)
    } catch (error) {
        console.log(error)
    }
    
    await dashboardView();
};
