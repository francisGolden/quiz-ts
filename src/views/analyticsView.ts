import { select, cancel } from "@clack/prompts";
import { profileView } from "./profileView";
import { JSONFilePreset } from "lowdb/node";
import  type { DbSchema } from "../types/quizTypes"

export const analyticsView = async (): Promise<void> => {
    const defaultData: DbSchema = { username: "", quizList: [], recordedSessions: [] }
    const db = await JSONFilePreset("db.json", defaultData)
    console.log(db.data.recordedSessions)
    const option = await select({
        message: "Select an option",
        options: [
            {value: "back", label: "Back"},
        ]
    })
    switch (option) {
        case "back":
            profileView()
            break;
        default:
            break;
    }
}