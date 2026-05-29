import { drawProjectHtml } from "../tools/drawProjectHTML.js"
import { isNumber } from "../tools/isNumber.js"
import { sendANewResponse } from "../tools/response.js"

import { createTheProjectF } from "./F.js"

export function createTheProjectE(){
    drawProjectHtml(
      "E", 
      "Este programa efetua o cálculo e apresenta o valor de uma prestação de um bem em atraso. Através do Período(n), da taxa(i) e do valor(C)", 
      3, 
      ["Inserir o Período (n)", "Inserir a taxa(i)", "Inserir o valor(R$)"], 
      true
    )

    const button = document.getElementById("submit")

    const input1 = document.getElementById("input0")
    const input2 = document.getElementById("input1")
    const input3 = document.getElementById("input2")


    button.addEventListener("click",()=>{
        if(input1.value && input2.value && input3.value){
            const periodo = isNumber(input1.value)
            const taxa = isNumber(input2.value)
            const valor = isNumber(input3.value)

            if(periodo.boolNumber && taxa.boolNumber && valor.boolNumber){
                const prest = valor.valueNumber + (valor.valueNumber * (taxa.valueNumber/100) * periodo.valueNumber)
                
                sendANewResponse(
                    "Resposta", 
                    `
                        Valor das Prestações: R$${prest.toFixed(2)} 
                    `,
                    "var(--color2)",    
                    createTheProjectF,
                    "Projeto F",
                    false
                )
            }
        }else{
            sendANewResponse("Erro", "Por favor adicione um valor corrreto", "var(--color4)")
        }
    })
}