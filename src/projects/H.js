import { drawProjectHtml } from "../tools/drawProjectHTML.js"
import { isNumber } from "../tools/isNumber.js"
import { sendANewResponse } from "../tools/response.js"

import { createTheProjectI } from "./I.js"

export function createTheProjectH(){
    drawProjectHtml(
      "H", 
      "Este programa lê, calcula e apresenta o valor do volume de uma caixa retangular.", 
      3, 
      ["Inserir o Comprimento", "Inserir a largura", "Inserir a altura"], 
      true
    )

    const button = document.getElementById("submit")

    const input1 = document.getElementById("input0")
    const input2 = document.getElementById("input1")
    const input3 = document.getElementById("input2")

    button.addEventListener("click",()=>{
        if(input1.value && input2.value && input3.value){
            let comp = isNumber(input1.value)
            let larg = isNumber(input2.value)
            let alt = isNumber(input2.value)
            
            if(comp.boolNumber && larg.boolNumber && alt.boolNumber){
                const vol = comp.valueNumber * larg.valueNumber * alt.valueNumber

                sendANewResponse(
                    "Resposta", 
                    `
                        O volume da caixa é: ${vol.toFixed(2)}
                    `,
                    "var(--color2)",
                    createTheProjectI,
                    "Projeto I",    
                    false
                )
            }
        }else{
            sendANewResponse("Erro", "Por favor adicione um valor corrreto", "var(--color4)")
        }
    })
}