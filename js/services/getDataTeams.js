export default {
    ws: new Worker("js/ws/wsGetTeams.js", {type:"module"}),
    ws4: new Worker("js/ws/wsGetTeamCampers.js", {type: "module"}),
    printData(){
        const table = document.querySelector(".teamsTable")
        this.ws.postMessage("hola");
        this.ws.addEventListener("message", (e)=>{
            table.insertAdjacentHTML("beforeend", e.data)
        })
    },
    printCampers(){
        this.ws4.postMessage("hola");
        this.ws4.addEventListener("message", (e)=>{
        })
    }
}