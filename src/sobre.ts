import Pege from "./pages/page";
import InformacaoUsuarioGitHub from "./Componentes/informacaoUsuarioGitHub";

class PageSobre extends Pege{

    constructor() {
        super();            
    }

    obterUserGitHub(){
        let u = new URL(window.location.href);
        return u.searchParams.get("user");
    }

    montarConteudoHTML(): void {
        const usuarioGitHub = new InformacaoUsuarioGitHub();
        
        this.obterConteudoHTML()
            .appendChild(usuarioGitHub.containner);
        usuarioGitHub.buscarUsuario(this.obterUserGitHub());
    }
}

new PageSobre().renderizar();