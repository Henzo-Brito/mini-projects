const btnMenu = document.getElementById("btnmenu")
const menu = document.getElementById("menu")

let clicked = false 

let rotation = 0

btnMenu.addEventListener("click",alterStateMenu)

function alterStateMenu(){
    clicked = !clicked

    rotation += 90
    btnMenu.style.rotate = `${rotation}deg`

    if(clicked){
        btnMenu.style.color = "var(--color1)"
        menu.style.animationName = "enterMenu"

        menu.style.display = "block"    
    }else{
        btnMenu.style.color = "var(--color3)"
        menu.style.animationName = "closeMenu"

        setTimeout(()=>{
            menu.style.display = "none"
        },460) 
    }
}

import { createTheProjectA } from "../projects/A.js"
import { createTheProjectB } from "../projects/B.js"
import { createTheProjectC } from "../projects/C.js"


const Menus = [
    {
        openFunc: createTheProjectA,
        name: "Projeto A",
        emoji: "F"
    },
    {
        openFunc: createTheProjectB,
        name: "Projeto B",
        emoji: "B"
    },{
        openFunc: createTheProjectC,
        name: "Projeto C",
        emoji: "C"
    }
]

function setMenu(){
    const projects = document.getElementById("projects")

    for (const menu of Menus){
        const project = document.createElement("div")

        project.className="project"
        
        project.innerHTML = `
            <p class="emoji">${menu.emoji}</p>
            <p class="text">${menu.name}</p>
        `

        project.addEventListener("click", ()=>{
            menu.openFunc()
            alterStateMenu()
        })

        projects.appendChild(project)
    }
}

setMenu()
