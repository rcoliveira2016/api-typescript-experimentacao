import Herder from './haeder';
import Footer from './footer';


export default class MasterPage {

    herder: Herder;
    footer: Footer;
    conteudoHTML: HTMLElement;
    containnerApp: HTMLElement;
    
    constructor() {
        this.herder = new Herder();
        this.footer = new Footer();
        this.conteudoHTML = document.createElement("div");
        this.containnerApp = document.getElementById("app");
    }

    obterConteudo():HTMLElement{
        let main = document.createElement("main");
        this.conteudoHTML.classList.add("conteudo-principal");
        main.appendChild(this.conteudoHTML);
        return main;
    }

    montarHTML(){
        this.containnerApp.appendChild(this.herder.header);
        this.containnerApp.appendChild(this.obterConteudo());
        this.containnerApp.appendChild(this.footer.footer);
    }

}