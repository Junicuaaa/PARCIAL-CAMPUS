const puerto = "4000"
const url = `http://localhost:${puerto}/campers`

self.addEventListener("message", (e)=>{
    let data = e.data
    let {name, age, phone, email, adress, birth, idNumber, entry, teamId} = data
    teamId = parseInt(teamId)
    data = {name, age, phone, email, adress, birth, idNumber, entry, teamId}
    Promise.resolve(fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    }))
})