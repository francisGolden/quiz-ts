import { isCancel, text } from "@clack/prompts";
import { JSONFilePreset } from 'lowdb/node'
import { dashboardView } from "./dashboardView";

interface Data {
    username: string;
}

// Read or create db.json
const defaultData: Data = { username: "" }

export const initView = async (): Promise<void> => {
    try {
        const db = await JSONFilePreset<Data>('db.json', defaultData)
        const usernameInput = <string>await text({
            message: "Please, write your name.",
            validate: (value) => {
                if (!value) return "Please enter a value"
            }
        });
        
        if (isCancel(usernameInput)) {
            console.log("operation cancelled")
            process.exit(0)
        }
        await db.update((data) => data.username = usernameInput)
        dashboardView()
    } catch (error) {
        console.error("An error occurred:", error)
        process.exit(1)
    }
};
