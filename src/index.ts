import Pege from "./pages/page";
import InformacaoUsuarioGitHub from "./Componentes/informacaoUsuarioGitHub";

class PageIndex extends Pege{

    constructor() {
        super();            
    }

    montarConteudoHTML(): void {
        const usuarioGitHub = new InformacaoUsuarioGitHub();
        
        this.obterConteudoHTML()
            .appendChild(usuarioGitHub.containner);
        usuarioGitHub.buscarUsuario("microsoft");
    }
}

new PageIndex().renderizar();