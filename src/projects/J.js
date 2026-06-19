import { drawProjectHtml } from "../tools/drawProjectHTML.js"
import { isNumber } from "../tools/isNumber.js"
import { sendANewResponse } from "../tools/response.js"

import { initalizeMain } from "./main.js"

export function createTheProjectJ(){
    drawProjectHtml(
      "J", 
      "o resultado do quadrado da diferença do valor A e B", 
      2, 
      ["Inserir o Valor (A)", "Inserir o Valor (B)"], 
      true
    )

    const button = document.getElementById("submit")
    
    const input1 = document.getElementById("input0")
    const input2 = document.getElementById("input1")

    button.addEventListener("click",()=>{
        if(input1.value && input2.value){
            let A = isNumber(input1.value);
            let B = isNumber(input2.value);
            
            if(A.boolNumber && B.boolNumber){
                let resultado = (A.valueNumber - B.valueNumber) ** 2

                sendANewResponse(
                    "Resposta", 
                    `
                        O resultado do quadrado da diferença do valor A e B é: ${resultado.toFixed(2)}
                    `,
                    "var(--color2)",
                    initalizeMain,
                    "Início",    
                    false
                )
            }
        }else{
            sendANewResponse("Erro", "Por favor adicione um valor corrreto", "var(--color4)")
        }
    })
}