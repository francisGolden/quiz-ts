import { select } from "@clack/prompts";
import { initMenu } from "./initMenu";

export const dashboardMenu = async () => {
    const option = await select({
        message: "Select an option",
        options: [
            { value: "euKnowledge", label: "EU Knowledge", hint: "" },
            {
                value: "back",
                label: "Go back",
                hint: ""
            }
        ],
        maxItems: 5, // Maximum number of items to display at once
    });
    switch (option){
        case "back":
            initMenu(true)
            break;
        default: 
            break;
    }
};