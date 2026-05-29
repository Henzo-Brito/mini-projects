import { drawProjectHtml } from "../tools/drawProjectHTML.js"
import { isNumber } from "../tools/isNumber.js"
import { sendANewResponse } from "../tools/response.js"

import { createTheProjectG } from "./G.js"

export function createTheProjectF(){
    drawProjectHtml(
      "F", 
      "Este programa Troca o valor de duas variáveis.", 
      2, 
      ["Inserir o valor(A)", "Inserir o valor(B)"], 
      true
    )

    const button = document.getElementById("submit")

    const input1 = document.getElementById("input0")
    const input2 = document.getElementById("input1")

    button.addEventListener("click",()=>{
        if(input1.value && input2.value){
            let A = isNumber(input1.value)
            let B = isNumber(input2.value)
            
            if(A.boolNumber && B.boolNumber){
                let troca = A;
                A = B;
                B = troca
                
                sendANewResponse(
                    "Resposta", 
                    `
                        Valor de A: ${A.valueNumber}
                        Valor de B: ${B.valueNumber}
                    `,
                    "var(--color2)",    
                    createTheProjectG,
                    "Projeto G",    
                    false
                )
            }
        }else{
            sendANewResponse("Erro", "Por favor adicione um valor corrreto", "var(--color4)")
        }
    })
}