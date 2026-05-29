import { drawProjectHtml } from "../tools/drawProjectHTML.js"
import { isNumber } from "../tools/isNumber.js"
import { sendANewResponse } from "../tools/response.js"

import { createTheProjectB } from "./B.js"

export function createTheProjectG(){
    drawProjectHtml(
      "G", 
      "Este programa lê quatro valores numéricos inteiros e apresentar o resultado de todas as multiplicações e adições.", 
      4, 
      ["Inserir o valor(A)", "Inserir o valor(B)", "Inserir o valor(C)", "Inserir o valor(D)"], 
      true
    )

    const button = document.getElementById("submit")

    const input1 = document.getElementById("input0")
    const input2 = document.getElementById("input1")
    const input3 = document.getElementById("input2")
    const input4 = document.getElementById("input3")

    button.addEventListener("click",()=>{
        if(input1.value && input2.value && input3.value && input4.value){
            let inputs = [
                {
                    id: "A",
                    number: isNumber(input1.value),
                },
                {
                    id: "B",
                    number: isNumber(input2.value),
                },
                {
                    id: "C",
                    number: isNumber(input3.value),
                },
                {
                    id: "D",
                    number: isNumber(input4.value),
                }
            ]

            let listenedInputs = [
                {
                    ids: ["A","B"],
                    values: [m, s] 
                }
            ]

            for(let input of inputs){
                if(input.number.boolNumber){

                    console.log(input)
    
                    sendANewResponse(
                        "Resposta", 
                        `
                            Valor de A: ${A.valueNumber}
                            Valor de B: ${B.valueNumber}
                        `,
                        "var(--color2)",    
                        createTheProjectB,
                        "Projeto F",    
                        false
                    )
                }
            }

        }else{
            sendANewResponse("Erro", "Por favor adicione um valor corrreto", "var(--color4)")
        }
    })
}