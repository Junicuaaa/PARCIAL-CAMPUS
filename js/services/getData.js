import delete_users from "./deleteData.js";

export default {
    ws: new Worker("js/ws/wsGet.js", {type:"module"}),
    printData(){
        const table = document.querySelector(".table")
        this.ws.postMessage("hola");
        this.ws.addEventListener("message", (e)=>{
            table.insertAdjacentHTML("beforeend", e.data)
            const button_delete = document.querySelectorAll(".delete")
            button_delete.forEach(element =>{
                element.addEventListener("click", (e)=>{
                    delete_users.deleteUer(element);
                })
            })
            this.ws.terminate();
        })
    },
}