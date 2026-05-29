import { drawProjectHtml } from "../tools/drawProjectHTML.js"
import { isNumber } from "../tools/isNumber.js"
import { sendANewResponse } from "../tools/response.js"
import { createTheProjectB } from "./B.js"

export function createTheProjectA(){
    drawProjectHtml(
      "A", 
      "Neste Projeto se lê a temperatura em celsius e o converte para Farenheit", 
      1, 
      ["Inserir o temperatura(Cº)"], 
      true
    )

    const button = document.getElementById("submit")

    const input1 = document.getElementById("input0")

    button.addEventListener("click",()=>{
        if(input1.value){
            const {boolNumber, valueNumber} = isNumber(input1.value)

            if(boolNumber){
                const farenheit = (9 * valueNumber + 160) / 5;

                sendANewResponse(
                    "Resposta", 
                    `${valueNumber}ºC em farenheits é: ${farenheit}ºF`,
                    "var(--color2)",
                    createTheProjectB,
                    "Projeto B",
                    false
                )
            }
        }else{
            sendANewResponse("Erro", "Por favor adicione um valor corrreto", "var(--color4)")
        }
    })
}