const puerto = "4000"
let headers = new Headers({"Content-Type": "application/json"})
self.addEventListener("message", async (e)=>{
    let request = await ( await fetch(`http://localhost:${puerto}/campers/${e.data}`, {
        method:"DELETE",
        headers: headers
    })) 
})