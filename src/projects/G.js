import { drawProjectHtml } from "../tools/drawProjectHTML.js"
import { isNumber } from "../tools/isNumber.js"
import { sendANewResponse } from "../tools/response.js"

import { createTheProjectH } from "./H.js"

export function createTheProjectG(){
    drawProjectHtml(
      "G", 
      "Este programa lê quatro valores inteiros e apresenta o resultado de todas as adições e multiplicações possíveis entre as variáveis A, B, C e D.", 
      4, 
      ["Inserir o valor (A)", "Inserir o valor (B)", "Inserir o valor (C)", "Inserir o valor (D)"], 
      true
    )

    const button = document.getElementById("submit")

    const input1 = document.getElementById("input0")
    const input2 = document.getElementById("input1")
    const input3 = document.getElementById("input2")
    const input4 = document.getElementById("input3")

    button.addEventListener("click", () => {
        if (input1.value && input2.value && input3.value && input4.value) {
            const A = isNumber(input1.value)
            const B = isNumber(input2.value)
            const C = isNumber(input3.value)
            const D = isNumber(input4.value)

            if (A.boolNumber && B.boolNumber && C.boolNumber && D.boolNumber) {
                const a = A.valueNumber
                const b = B.valueNumber
                const c = C.valueNumber
                const d = D.valueNumber

                sendANewResponse(
                    "Resposta",
                    `
                        Adições:
                        A + B = ${a + b};\n
                        A + C = ${a + c};\n
                        A + D = ${a + d};\n
                        B + C = ${b + c};\n
                        B + D = ${b + d};\n
                        C + D = ${c + d};\n

                        Multiplicações:
                        A × B = ${a * b};\n
                        A × C = ${a * c};\n
                        A × D = ${a * d};\n
                        B × C = ${b * c};\n
                        B × D = ${b * d};\n
                        C × D = ${c * d};\n
                    `,
                    "var(--color2)",
                    createTheProjectH,
                    "Projeto H",
                    false
                )
            }
        } else {
            sendANewResponse("Erro", "Por favor adicione um valor correto", "var(--color4)")
        }
    })
}
