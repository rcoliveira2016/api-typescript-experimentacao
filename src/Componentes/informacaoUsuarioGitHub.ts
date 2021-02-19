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

export default class InformacaoUsuarioGitHub {

    containner:HTMLElement;
    constructor() {
        this.containner= document.createElement('div')
    }

    buscarUsuario(usuarioGitHub:string){
        this.montarConteudoHTML(usuarioGitHub);
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

    montarRepository(usuarioGitHub:string){
        const ul = document.createElement('ul');        
        ul.className = "lista-repositorio"
        axios.get<RepositorioGitHub[]>(`https://api.github.com/users/${usuarioGitHub}/repos`)
        .then(response => {
            response.data.forEach(item => {
                ul.appendChild(this.criarItem(item));
            });
            
            this.containner.appendChild(ul);
        });

    }

    montarConteudoHTML(usuarioGitHub:string): void {
        axios.get<UserGitHub>(`https://api.github.com/users/${usuarioGitHub}`)
        .then(response => {
            this.containner.insertAdjacentHTML('beforeend', `<p><strong>Usuario:</strong> ${response.data.login}<p>`);
            this.containner.insertAdjacentHTML('beforeend', `<p><strong>Repositorios:</strong> ${response.data.public_repos}<p>`);
            this.containner.insertAdjacentHTML('beforeend', `<img src="${response.data.avatar_url}" />`);
            this.montarRepository(usuarioGitHub);
        });                
    }

}