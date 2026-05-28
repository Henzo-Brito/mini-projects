import { drawProjectHtml } from "../tools/drawProjectHTML.js"
import { isNumber } from "../tools/isNumber.js"
import { sendANewResponse } from "../tools/response.js"

import { createTheProjectB } from "./B.js"

export function createTheProjectC(){
   drawProjectHtml(
      "C", 
      "Neste Projeto calcula-se o valor do volume de uma lata de óleo, através do seu raio e altura", 
      2, 
      ["Inserir o Raio(cm)", "Inserir a Altura(cm)"], 
      true
    )

    const button = document.getElementById("submit")

    const input1 = document.getElementById("input0")
    const input2 = document.getElementById("input1")

    button.addEventListener("click",()=>{
        if(input1.value && input2.value){
            const {boolNumber1, raio} = isNumber(input1.value)
            const {boolNumber2, altura} = isNumber(input2.value)

            if(boolNumber1 && boolNumber2){
                const volume = Math.PI() *raio**2 * altura

                sendANewResponse(
                    "Resposta", 
                    `O volume da lata de óleo é: ${volume}cm³`,
                    "var(--color2)",
                    createTheProjectB,
                    "Projeto C",
                    false
                )
            }
        }else{
            sendANewResponse("Erro", "Por favor adicione um valor corrreto", "var(--color4)")
        }
    })
}