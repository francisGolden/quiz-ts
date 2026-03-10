import { isCancel, text } from "@clack/prompts";

export const initMenu = async () => {
    try {
        const username = <String>await text({
            message: "Please, write your name.",
            validate: (value) => {
                if (!value) return "Please enter a value"
            }
        });

        if (isCancel(username)) {
            console.log("operation cancelled")
            process.exit(0)
        }

        console.log("Hi, ", username);
    } catch (error) {
        console.error("An error occurred:", error)
        process.exit(1)
    }
};
