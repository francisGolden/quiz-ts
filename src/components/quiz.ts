import { select } from "@clack/prompts";
// REQUIREMENTS:
// let's create a quiz component that leverages the select feature of the clack library to create a loop in which
// the user is asked a question and he has to select the right answer from a list of options.

// the component is a function that is executed inside the quiz view
// the component accepts multiple arguments: question: string, options: KnowledgeOption[], correctAnswer: string.
// each option is an Interface with properties such as id, label, etc.
interface KnowledgeOption {
    optionId: string;
    optionText: string;
}

interface QuizProps {
    question: string;
    options: KnowledgeOption[];
    correctAnswer: string;
    id: string;
}

// the correct answer corresponds to the id of the right option.
// when the user selects an option, the answer will be evaluated inside the component and saved in the state.
// after a certain amount of tests, the user will be able to see the score for the session.
export const quiz = async ({
    question,
    options,
    correctAnswer,
    id,
}: QuizProps) => {
    try {
        const option = await select({
            message: question,
            options: options.map((option) => {
                return {
                    value: option.optionId,
                    label: option.optionText,
                    hint: "",
                };
            }),
        });
        console.log("selected answer", option, typeof option);
        console.log("correct answer: ", correctAnswer, typeof correctAnswer);
        switch (option) {
            case correctAnswer:
                console.log("right!");
                break;
            default:
                console.log("wrong!");
                break;
        }
    } catch (error) {
        console.log(error);
    }
};
