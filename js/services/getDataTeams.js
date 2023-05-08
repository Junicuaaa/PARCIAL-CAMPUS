export default {
    ws: new Worker("js/ws/wsGetTeams.js", {type:"module"}),
    printData(){
        const table = document.querySelector(".teamsTable")
        this.ws.postMessage("hola");
        this.ws.addEventListener("message", (e)=>{
            table.insertAdjacentHTML("beforeend", e.data)
        })
    },
}