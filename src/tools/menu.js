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

import { createTheProjectA,
    createTheProjectB,
    createTheProjectC,
    createTheProjectD,
    createTheProjectE,
    createTheProjectF,
    createTheProjectG,
    createTheProjectH,
    createTheProjectI,
    createTheProjectJ,
    initalizeMain
} from "../projects/allPages.js"

const Menus = [
    {
        openFunc: initalizeMain,
        name: "Início",
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
    },{
        openFunc: createTheProjectE,
        name: "Projeto E",
        emoji: "E"
    },{
        openFunc: createTheProjectF,
        name: "Projeto F",
        emoji: "F"
    },{
        openFunc: createTheProjectG,
        name: "Projeto G",
        emoji: "G"
    },{
        openFunc: createTheProjectH,
        name: "Projeto H",
        emoji: "H"
    },{
        openFunc: createTheProjectI,
        name: "Projeto I",
        emoji: "I"
    },{
        openFunc: createTheProjectJ,
        name: "Projeto J",
        emoji: "J"
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
