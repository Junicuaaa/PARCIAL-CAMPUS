let pathname = new URL(import.meta.url).pathname;
let name = pathname.split("/").pop().replace(".js", "");

export default class myComponent extends HTMLElement{
    static async component(){
        return await (await fetch(pathname.replace(".js", ".html"))).text();
    }
    handleEvent(e){
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        console.log(data);
        let ws = new Worker("js/ws/wsPost.js", {type: "module"});
        ws.postMessage(data);
        this.form.reset();
    }
    change(e){
        window.location.href = "crud.html"
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        Promise.resolve(myComponent.component()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.form = this.shadowRoot.querySelector("form");
            this.form.addEventListener("submit", this.handleEvent.bind(this));
            this.btn = this.shadowRoot.querySelector(".change");
            this.btn.addEventListener("click", this.change.bind(this))
        })
    }
}
customElements.define(name, myComponent)