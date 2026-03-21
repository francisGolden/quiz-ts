import { quiz } from "../components/quiz";

export const quizView = async () => {
    const quizData = {
        question: "lorem ipsum etcdfksljfldks",
        options: [
            { optionId: "id1", optionText: "text first option" },
            { optionId: "id2", optionText: "text second option" },
        ],
        correctAnswer: "id1",
        id: "quiz1",
    };
    let i = 0
    while (i <= 2) {
        await quiz(quizData)
        i++
    }
    console.log("finished the loop!")
};
