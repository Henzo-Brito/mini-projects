export function sendANewResponse(title="newMessage", msg="", color="red", func=()=>{}){
    let message = document.getElementById("msg")

    message.innerHTML = `
    <div class="topper">
            <h3 class="title-error">${title}</h3>

            <i class="fa-solid fa-x"></i>
        </div>
        <p class="description">${msg}</p>
        <div class="submit" id="sub">Continuar</div>
    `

    message.style.display = "flex"

}
