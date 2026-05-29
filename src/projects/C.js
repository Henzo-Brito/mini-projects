import { drawProjectHtml } from "../tools/drawProjectHTML.js"
import { isNumber } from "../tools/isNumber.js"
import { sendANewResponse } from "../tools/response.js"

import { createTheProjectD } from "./D.js"

export function createTheProjectC(){
    drawProjectHtml(
      "C", 
      "Neste Projeto calcula-se o valor do volume de uma lata de óleo, através do seu raio(cm) e altura(cm)", 
      2, 
      ["Inserir o Raio(cm)", "Inserir a Altura(cm)"], 
      true
    )

    const button = document.getElementById("submit")

    const input1 = document.getElementById("input0")
    const input2 = document.getElementById("input1")

    button.addEventListener("click",()=>{
        if(input1.value && input2.value){
            const raio = isNumber(input1.value)
            const altura = isNumber(input2.value)
            
            console.log(raio, altura)

            if(raio.boolNumber && altura.boolNumber){
                const volume = Math.PI *raio.valueNumber**2 * altura.valueNumber
                
                sendANewResponse(
                    "Resposta", 
                    `O volume da lata de óleo é: ${volume}cm³`,
                    "var(--color2)",
                    createTheProjectD,
                    "Projeto D",
                    false
                )
            }
        }else{
            sendANewResponse("Erro", "Por favor adicione um valor corrreto", "var(--color4)")
        }
    })
}