export default{
    deleteUer(p1){
        p1.parentNode.parentNode.parentNode.parentNode.parentNode.remove() //que asco esto, lo siento recursividad...//
        let ws = new Worker("js/ws/wsDelete.js", {type: "module"})
        ws.postMessage(p1.classList[1])
    }
}