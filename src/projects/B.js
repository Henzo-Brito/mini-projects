import { drawProjectHtml } from "../tools/drawProjectHTML.js"
import { isNumber } from "../tools/isNumber.js"
import { sendANewResponse } from "../tools/response.js"
import { createTheProjectC } from "./C.js"

export function createTheProjectB(){
    drawProjectHtml(
      "B", 
      "Neste Projeto se lê a temperatura em Farenheit e o converte para celsius", 
      1, 
      ["Inserir o temperatura(Fº)"], 
      true
    )

    const button = document.getElementById("submit")

    const input1 = document.getElementById("input0")

    button.addEventListener("click",()=>{
        if(input1.value){
            const {boolNumber, valueNumber} = isNumber(input1.value)

            if(boolNumber){
                const celsius = ((valueNumber - 32) * 5) / 9

                sendANewResponse(
                    "Resposta", 
                    `${valueNumber}ºF em Celcius é: ${celsius}ºC`,
                    "var(--color2)",
                    createTheProjectC,
                    "Projeto C",
                    false
                )
            }
        }else{
            sendANewResponse("Erro", "Por favor adicione um valor corrreto", "var(--color4)")
        }
    })
}