import MasterPage from "../Componentes/master.page";

export default abstract class Page {
    masterPage: MasterPage;
    
    constructor() {
        this.masterPage = new MasterPage();
    }

    abstract montarConteudoHTML(): void;

    obterConteudoHTML():HTMLElement{
        return this.masterPage.conteudoHTML;
    }

    renderizar(){
        this.montarConteudoHTML();
        this.masterPage.montarHTML();
    }
}