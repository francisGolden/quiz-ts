import { select } from "@clack/prompts";
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
            ],
            maxItems: 5, // Maximum number of items to display at once
        });
        switch (option) {
            case "back":
                initView(true);
                break;
            case "euKnowledge":
                quizView();
                break;
            default:
                break;
        }
    } catch (error){
        console.log(error)
    }
};
