let time;
const message = document.getElementById("msg")

export function sendANewResponse(
    title = "newMessage",
    msg = "",
    color = "rgb(87, 143, 255)",
    fun = () => {},
    msgSubmit = "Fechar",
    haveTime = true
){
    if(!message) return

    message.innerHTML = `
        <div class="topper">
            <h3 class="title-error">${title}</h3>
        </div>

        <p class="description">${msg}</p>

        <div class="cont">
            <div class="submit" id="sub">${msgSubmit}</div>
        </div>
    `

    message.style.display = "flex"
    message.style.backgroundColor = color
    message.style.animation = ""

    clearTimeout(time)

    if(haveTime){
        time = setTimeout(() => {
            closeResponse()
        }, 2500)
    }

    const btnSubmit = document.getElementById("sub")

    btnSubmit.onclick = () => {
        fun()
        clearTimeout(time)
        closeResponse()
    }
}

export function closeResponse(){
    message.style.animation = "returnMessage 0.25s forwards"

    setTimeout(() => {
        message.style.display = "none"
    }, 250)
}