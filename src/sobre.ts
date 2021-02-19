import Pege from "./pages/page";
import axios from 'axios';

interface RepositorioGitHub{
    full_name: string;
    html_url: string;
}

interface UserGitHub{
    login: string;
    avatar_url: string;
    public_repos: number;
}

class PageSobre extends Pege{

    constructor() {
        super();            
    }

    criarItem(menuItem:RepositorioGitHub):HTMLElement{
        let li  = document.createElement("li");
        let link = document.createElement("a");
        link.innerText = menuItem.full_name;
        link.href = menuItem.html_url;
        link.setAttribute('target',"_blank")
        li.append(link);
        return li;
    }

    obterUserGitHub(){
        let u = new URL(window.location.href);
        return u.searchParams.get("user");
    }

    montarRepository(usuarioGitHub:string){
        const ul = document.createElement('ul');        
        ul.className = "lista-repositorio"
        axios.get<RepositorioGitHub[]>(`https://api.github.com/users/${usuarioGitHub}/repos`)
        .then(response => {
            response.data.forEach(item => {
                ul.appendChild(this.criarItem(item));
            });
            this.obterConteudoHTML().appendChild(ul);
        });

    }

    montarConteudoHTML(): void {
        const usuarioGitHub = this.obterUserGitHub();
        axios.get<UserGitHub>(`https://api.github.com/users/${usuarioGitHub}`)
        .then(response => {
            this.obterConteudoHTML().insertAdjacentHTML('beforeend', `<p><strong>Usuario:</strong> ${response.data.login}<p>`);
            this.obterConteudoHTML().insertAdjacentHTML('beforeend', `<p><strong>Repositorios:</strong> ${response.data.public_repos}<p>`);
            this.obterConteudoHTML().insertAdjacentHTML('beforeend', `<img src="${response.data.avatar_url}" />`);
            this.montarRepository(usuarioGitHub);
        });                
    }
}

new PageSobre().renderizar();