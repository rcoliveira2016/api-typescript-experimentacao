
export default class Footer {

    footer: HTMLElement;
    div: HTMLElement;
    
    constructor() {
        this.footer = document.createElement('footer');
        this.div = document.createElement('div');

        this.footer.classList.add("footer");
        this.footer.appendChild(this.div);
        this.div.innerText = "Ola";
        
    }

}