import Pege from "./pages/page";

class PageIndex extends Pege{

    constructor() {
        super();            
    }

    montarConteudoHTML(): void {
        this.obterConteudoHTML().innerHTML="oi pessoal";
    }
}

new PageIndex().renderizar();