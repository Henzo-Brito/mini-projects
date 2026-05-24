
export function drawProjectHtml(title="New Project", description="", inputs=0, placeholders=[], submit=true){
    const main = document.getElementById("main")
    
    let inputsDiv = ""

    inputs = Number(inputs)

    if (isNaN(inputs)){
        return `Error in create a new Project`
    }

    for(let i = 0; i < inputs; i++){
        const placeholder = placeholders[i] || "Inserir texto"

        inputsDiv += `
        <input 
            class="input" 
            type="text" 
            id="input${i}"
            placeholder="${placeholder}" 
        />`
    }

    let mainHtml = ""

    if (submit){
        mainHtml = `<main class="container">
            <h1 class="title">Projeto ${title}</h1>
        
            <p class="description">${description}</p>
        
            ${inputsDiv}
    
            <div class="submit" id="submit">Calcular</div>
        </main>`
    }else{
        mainHtml = `<main class="container">
            <h1 class="title">Projeto ${title}</h1>
        
            <p class="description">${description}</p>
        
            ${inputsDiv}
        </main>`
    }

    
    main.innerHTML = mainHtml
}