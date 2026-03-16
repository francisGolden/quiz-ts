import { select } from "@clack/prompts";
import { initMenu } from "./initMenu";

export const dashboardMenu = async () => {
    const option = await select({
        message: "Select an option",
        options: [
            { value: "one", label: "labelOne", hint: "hintOne" },
            { value: "two", label: "labelTwo", hint: "hintTwo" },
            {
                value: "stats",
                label: "statsLabel",
                hint: "statsHint",
            },
            {
                value: "back",
                label: "backLabel",
                hint: "backHint"
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