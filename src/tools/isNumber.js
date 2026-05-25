import { sendANewResponse } from "./response.js";

export function isNumber(value){
    let numb = Number(value)

    console.log(numb)

    if (isNaN(numb)){
        sendANewResponse(
            "Erro de Input",
            "Por favor coloque um valor válido",
            "var(--color4)"
        )
        return {
            boolNumber: false,
            valueNumber: numb
        }
    }

    return {
        boolNumber: true,
        valueNumber: numb
    }
}
