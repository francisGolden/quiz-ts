import { select } from "@clack/prompts";

export const quizView = async () => {
    try {
        const option = await select({
            message: "Uada",
            options: [{ value: "one", label: "a", hint: "" }],
        });
    } catch (error) {
        console.log(error);
    }
};
