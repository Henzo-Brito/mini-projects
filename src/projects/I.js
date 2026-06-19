import { drawProjectHtml } from "../tools/drawProjectHTML.js"
import { isNumber } from "../tools/isNumber.js"
import { sendANewResponse } from "../tools/response.js"

import { createTheProjectJ } from "./J.js"

export function createTheProjectI(){
    drawProjectHtml(
      "I", 
      "Este programa lê, um valor númerico e o eleva ao quadrado.", 
      1, 
      ["Inserir o Valor"], 
      true
    )

    const button = document.getElementById("submit")
    const input1 = document.getElementById("input0")

    button.addEventListener("click",()=>{
        if(input1.value){
            let value = isNumber(input1.value)
            
            if(value.boolNumber){
                let res = value.valueNumber * value.valueNumber

                sendANewResponse(
                    "Resposta", 
                    `
                        O volume da caixa é: ${res.toFixed(2)}
                    `,
                    "var(--color2)",
                    createTheProjectJ,
                    "Projeto J",    
                    false
                )
            }
        }else{
            sendANewResponse("Erro", "Por favor adicione um valor corrreto", "var(--color4)")
        }
    })
}