const puerto = "4000";
const url = `http://localhost:${puerto}/campers`
let ws = {
    print(data) {
        let html = ``;
        let contador = 0
        data.forEach(element => {
            let {teamId} = element
            console.log(teamId);
            if (teamId === 1) {
                teamId = "Sputnik"
            }else if(teamId === 2){
                teamId ="Apollo"
            }else{
                teamId = "Artemis"
            }
            let name = element.name.replace(/ /g, "");
            contador ++
            html += /*html */`
            <!-- Button trigger modal -->
            <div>
                <button type="button" class="btn btn-light mb-2 w-100" data-bs-toggle="modal" data-bs-target="#${name}">
                ${element.name}
                </button>

                <!-- Modal -->
                <div class="modal fade" id="${name}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content bg-dark text-white">
                    <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${element.name}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <ul>
                    <li><h6>Age <i>${element.age}</i></h6></li>
                    <li><h6>Phone <i>${element.phone}</i></h6></li>
                    <li><h6>Email <i>${element.email}</i></h6></li>
                    <li><h6>Adress <i>${element.adress}</i></h6></li>
                    <li><h6>Birth <i>${element.birth}</i></h6></li>
                    <li><h6>Identification Number <i>${element.idNumber}</i></h6></li>
                    <li><h6>Entry Date <i>${element.entry}</i></h6></li>
                    <li><h6>Team <i>${teamId}</i></h6></li>
                </ul>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="delete ${element.id} btn btn-dark">Delete</button>
                    <button type="button" class="edit ${element.id} btn btn-secondary">Edit</button>
                    </div>
                </div>
                </div>
                </div>
                </div>
            `
            return html
        });
        return html
    }
}
self.addEventListener("message", async (e) => {
    let data = await (await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/js" }
    })).json()
    postMessage((ws.print(data)));
})