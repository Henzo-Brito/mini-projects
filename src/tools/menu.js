const btnMenu = document.getElementById("btnmenu")
const menu = document.getElementById("menu")

let clicked = false 

let rotation = 0

btnMenu.addEventListener("click", alterStateMenu)

let actualMenu = "home"

function actualizeNamedMenu(str){
    actualMenu = str
}

export {actualizeNamedMenu}

function alterStateMenu(){
    const titleMenu = document.getElementById("menuTitle");
    titleMenu.innerText = actualMenu
    
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
import { createTheProjectD } from "../projects/D.js"
import { initalizeMain } from "../projects/main.js"

const Menus = [
    {
        openFunc: initalizeMain,
        name: "Home",
        emoji: "<i class='fa-solid fa-house'></i>"
    },
    {
        openFunc: createTheProjectA,
        name: "Projeto A",
        emoji: "A"
    },
    {
        openFunc: createTheProjectB,
        name: "Projeto B",
        emoji: "B"
    },{
        openFunc: createTheProjectC,
        name: "Projeto C",
        emoji: "C"
    },{
        openFunc: createTheProjectD,
        name: "Projeto D",
        emoji: "D"
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
            actualMenu = menu.name
            alterStateMenu()
        })

        projects.appendChild(project)
    }
}

setMenu()
