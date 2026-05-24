import { drawProjectHtml } from "../tools/drawProjectHTML.js"
import { sendANewResponse } from "../tools/response.js"

export function createTheProjectA(){
   drawProjectHtml(
      "A", 
      "Neste Projeto se lê a temperatura em celsius e o converte para Farenheit", 
      1, ["Inserir o temperatura(Cº)"], true
    )

    const button = document.getElementById("submit")

    const input1 = document.getElementById("input0")

    button.addEventListener("click",()=>{
        if(input1.value){
            

            sendANewResponse("Erro", "Por favor adicione um valor")
        }else{
            sendANewResponse("Erro", "Por favor adicione um valor")
        }
    })
}