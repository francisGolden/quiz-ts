import { select } from "@clack/prompts";

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
        ],
        maxItems: 5, // Maximum number of items to display at once
    });
};