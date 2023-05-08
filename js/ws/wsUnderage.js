const puerto = "4000";
const url = `http://localhost:${puerto}/campers`
let ws = {
    print(data) {
        let html = ``;
        data.forEach(element => {
            let {name, age, phone, email, adress, birth, idNumber, entry, teamId} = element
            age = parseInt(age);
            if (age < 18) {
                html += /*html */`
                <h6>${name}</h6>
                `
            }
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