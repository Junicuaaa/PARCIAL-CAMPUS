const puerto = "4000";
const url = `http://localhost:${puerto}/teams?_embed=campers`
let ws = {
    print(data) {
        let html = ``;
        let contador = 0
        data.forEach(element => {
            element.campers.forEach(element2 =>{
                nameCamper = element2.name
            })
            html += /*html */`
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
    console.log(data);
    postMessage((ws.print(data)));
})