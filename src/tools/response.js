let time;

export function sendANewResponse(
    title="newMessage", 
    msg="", 
    color="rgb(87, 143, 255)", 
    fun=()=>{}, 
    msgSubmit="Fechar",
    haveTime=true
){
    let message = document.getElementById("msg")

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

    clearTimeout(time)
    if(haveTime){
        time = setTimeout(()=>{
            message.style.display = "none"
        },2500)
    }

    const btnSubmit = document.getElementById("sub")

    btnSubmit.addEventListener("click", ()=>{
        fun()
        clearTimeout(time)
        message.style.display = "none"
    })
}
