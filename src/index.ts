import {select} from "@clack/prompts"

// import * as readline from "node:readline/promises"
// import { stdin as input, stdout as output } from 'node:process';

// this is a bad choice for my case because it doesn't have a built-in 'select' feature 
// const main = async () => {
//     const rl = readline.createInterface({ input, output });
//     const risposta = await rl.question("What's your name?")
//     console.log(risposta)
//     rl.close()
// }

// main()

// option using the library "clack", which seems like a great choice to build CLI programs
const main = async () => {
    const risposta = <Number | String>await select({
        message: "Seleziona la risposta corretta",
        options: [
            {value: 1},
            {value: 2},
            {value: 3}
        ]
    })
    console.log("hai selezionato:", risposta)
}

main()

