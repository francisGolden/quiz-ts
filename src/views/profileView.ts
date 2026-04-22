import { select, cancel, text, isCancel } from "@clack/prompts";
import { JSONFilePreset } from "lowdb/node";
import { dashboardView } from "./dashboardView";

interface Data {
    username: string;
}

const defaultData: Data = { username: "" };

export const profileView = async (): Promise<void> => {
    try {
        const option = await select({
            message: "Select an option",
            options: [
                { value: "changeUsername", label: "Change username", hint: "" },
                { value: "analyticsView", label: "Analytics", hint: ""},
                {
                    value: "back",
                    label: "Go back",
                    hint: "",
                },
                {
                    value: "close",
                    label: "Close the application",
                    hint: "",
                },
            ],
            maxItems: 5, // Maximum number of items to display at once
        });
        switch (option) {
            case "changeUsername":
                const db = await JSONFilePreset<Data>('db.json', defaultData)
                const usernameInput = <string>await text({
                    message: "Please, write your name.",
                    validate: (value) => {
                        if (!value) return "Please enter a value";
                    },
                });

                if (isCancel(usernameInput)) {
                    console.log("operation cancelled");
                    process.exit(0);
                }
                await db.update((data) => (data.username = usernameInput));
                profileView()
                break;
            case "analyticsView":
                break;
            case "back":
                dashboardView();
                break;
            case "close":
                cancel("Application closed");
                process.exit(0);
            default:
                break;
        }
    } catch (error) {
        console.error("An error occurred:", error)
        console.log(error);
    }
};
