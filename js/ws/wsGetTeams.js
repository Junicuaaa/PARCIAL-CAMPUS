const puerto = "4000";
const url = `http://localhost:${puerto}/campers`
let ws = {
    print(data) {
        let html = ``;
        let contador = 0
        data.forEach(element => {
            contador ++
            console.log(contador);
            html += /*html */`

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