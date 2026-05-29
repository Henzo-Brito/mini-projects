import { drawProjectHtml } from "../tools/drawProjectHTML.js"
import { isNumber } from "../tools/isNumber.js"
import { sendANewResponse } from "../tools/response.js"

import { createTheProjectB } from "./B.js"

export function createTheProjectD(){
    drawProjectHtml(
      "D", 
      "Neste Projeto calcula-se a quantidade de combusível gasto em uma viagem de carros, que gasta 12 quilômetros por litro. apartir do tempo gasto e a velocidade média durante a viagem.", 
      2, 
      ["Tempo gasto(horas)", "velocidade média(km/h)"], 
      true
    )

    const button = document.getElementById("submit")

    const input1 = document.getElementById("input0")
    const input2 = document.getElementById("input1")

    button.addEventListener("click",()=>{
        if(input1.value && input2.value){
            const tempo = isNumber(input1.value)
            const velocidade = isNumber(input2.value)

            if(tempo.boolNumber && velocidade.boolNumber){
                const dist = tempo.valueNumber * velocidade.valueNumber;
                const litros = Math. dist/12;

                sendANewResponse(
                    "Resposta", 
                    `
                        Velocidade: ${velocidade.valueNumber}km/h \n
                        Tempo gasto: ${tempo.valueNumber}h \n
                        Distância percorrida: ${dist}km \n
                        Litros gastos: ${litros}L
                    `,
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