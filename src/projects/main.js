import { drawProjectHtml } from "../tools/drawProjectHTML.js"

import { createTheProjectA } from "./A.js";

export function initalizeMain(){
    drawProjectHtml(
        "do Henzo 👋", 
        "Este site tem vários projetos para apenas um HTML, clique em ☰ e veja todos eles.", 
        0, 
        [],
         true)
    
    const button = document.getElementById("submit")
    
    button.innerText = "Projeto A";
    
    button.addEventListener("click",()=>{
        createTheProjectA()
    })
}

initalizeMain()