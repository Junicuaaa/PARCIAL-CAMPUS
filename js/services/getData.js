import delete_users from "./deleteData.js";
import edit_users from "./editData.js";
export default {
    ws: new Worker("js/ws/wsGet.js", {type:"module"}),
    printData(){
        const table = document.querySelector(".table")
        this.ws.postMessage("hola");
        this.ws.addEventListener("message", (e)=>{
            table.insertAdjacentHTML("beforeend", e.data)
            let delete_button = document.querySelectorAll(".delete");
            let edit_button = document.querySelectorAll(".edit");3
            const dialog = document.querySelector("#my-dialog")
            delete_button.forEach((element) => {
              element.addEventListener("click", () => {
                delete_users.deleteUer(element)
              });
            });
            edit_button.forEach((element) => {
                element.addEventListener("click", () => {
                  edit_users.editEvent(element)
                  dialog.showModal();
                });
              });
          });
    },
}