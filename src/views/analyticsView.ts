import { select, cancel } from "@clack/prompts";
import { profileView } from "./profileView";

export const analyticsView = async (): Promise<void> => {
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