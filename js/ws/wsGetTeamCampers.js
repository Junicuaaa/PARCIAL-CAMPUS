const puerto = "4000";
const url = `http://localhost:${puerto}/teams?_embed=campers`
let ws = {
    print(data) {
        let html = ``;
        data.forEach(element => {
            element.campers.forEach(element2 =>{
                if (element.campers.teamId === 1) {
                }
                nameCamper = element2.name
                console.log(nameCamper);
                html += /*html */`
                
                `
            })
            return html
        });
        return html
    },

}
self.addEventListener("message", async (e) => {
    let data = await (await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/js" }
    })).json()
    postMessage({data: (ws.print(data))});
})