export default {
    editEvent(element) {
        const modal = document.querySelector("#my-dialog")
        console.log(element.classList[1]);
        let ws = new Worker("js/ws/wsPut.js", { type: "module" })
        ws.postMessage({ id: element.classList[1] });
        ws.addEventListener("message", (e) => {
            modal.innerHTML = e.data;
            let form = document.querySelector("#updateForm")
            form.addEventListener("submit", (e)=>{
                e.preventDefault()
                let dataform = Object.fromEntries(new FormData(e.target))
                console.log(dataform);
                ws.postMessage({data: dataform, id: element.classList[1]})
            })
        })

    }
}