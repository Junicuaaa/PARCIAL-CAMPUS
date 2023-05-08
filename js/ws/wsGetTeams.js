const puerto = "4000";
const url = `http://localhost:${puerto}/teams?_embed=campers`
let ws = {
    print(data) {
        let html = ``;
        let contador = 0
        data.forEach(element => {
            let nameCamper;
            element.campers.forEach(element2 =>{
                nameCamper = element2.name
            })
            html += /*html */`
            <div>
                <button type="button" class="btn btn-light mb-2 w-100" data-bs-toggle="modal" data-bs-target="#${element.name}">
                ${element.name}
                </button>
                <!-- Modal -->
                <div class="modal fade" id="${element.name}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content bg-dark text-white">
                    <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${element.trainer}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <ul class="team${element.name}">
                        <i>${element.trainer} students</i>
                    </ul>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
                </div>
                </div>
            `
            return html
        });
        return html
    },
    embedCamper(data){
        console.log(data);
    }

}
self.addEventListener("message", async (e) => {
    let data = await (await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/js" }
    })).json()
    postMessage((ws.print(data)));
})