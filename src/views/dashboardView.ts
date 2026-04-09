import { select, cancel } from "@clack/prompts";
import { initView } from "./initView";
import { quizView } from "./quizView";

export const dashboardView = async (): Promise<void> => {
    try {
        const option = await select({
            message: "Select an option",
            options: [
                { value: "euKnowledge", label: "EU Knowledge", hint: "" },
                {
                    value: "back",
                    label: "Go back",
                    hint: "",
                },
                {
                    value: "close",
                    label: "Close the application",
                    hint: ""
                }
            ],
            maxItems: 5, // Maximum number of items to display at once
        });
        switch (option) {
            case "back":
                initView();
                break;
            case "euKnowledge":
                quizView();
                break;
            case "close":
                cancel('Application closed');
                process.exit(0);
            default:
                break;
        }
    } catch (error){
        console.log(error)
    }
};
