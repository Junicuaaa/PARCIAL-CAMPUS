const puerto = "4000"
let headers = new Headers({"Content-Type": "application/json"});
let ws2 ={
    dataForm(data){
        let html = /*html*/`
        <form id="updateForm">
        <input class="forminput" value="${data.name}" type="text" placeholder="Camper's name" name="name" required>
        <input class="forminput" value="${data.age}" type="text" placeholder="Camper's age" name="age" required>
        <input class="forminput" value="${data.phone}" type="text" placeholder="Camper's phone number" name="phone" required>
        <input class="forminput" value="${data.email}" type="email" placeholder="Camper's email" name="email" required>
        <input class="forminput" value="${data.adress}" type="text" placeholder="Camper's adress" name="adress" required>
        <label for=""><i>Camper's birth date</i></label>
        <input class="forminput" value="${data.birth}" type="date" name="birth" required>
        <input class="forminput" value="${data.idNumber}" type="text" placeholder="Camper's ID number" name="idNumber" required>
        <label for=""><i>Camper's entry date</i></label>
        <input class="forminput" value="${data.entry}" type="date" placeholder="Camper's entry date" name="entry" required>
        <select class="forminput" name="teamId" required>
            <option value="">Select Camper's team</option>
            <option value="1">Sputnik</option>
            <option value="2">Apollo</option>
            <option value="3">Artemis</option>
        </select>
        <button type="submit">Update Camper</button>
    </form>
        `
        return html
    }
}

self.addEventListener("message", async (e)=>{
    if (e.data.id) {
        let request = await (await fetch(`http://localhost:${puerto}/campers/${e.data.id}`, 
        {
            method: "GET", 
            headers: headers,
        })).json();
        postMessage(ws2.dataForm(request))
    }

})
self.addEventListener("message", async (e)=>{
    if (e.data.data) {
        let data = e.data.data
        let {name, age, phone, email, adress, birth, idNumber, entry, teamId} = data
        teamId = parseInt(teamId)
        dataParsed = {name, age, phone, email, adress, birth, idNumber, entry, teamId}
        let request2 = await (await fetch(`http://localhost:${puerto}/campers/${e.data.id}`, 
        {
            method: "PUT", 
            headers: headers,
            body: JSON.stringify(dataParsed)
        })).json();
    }
})