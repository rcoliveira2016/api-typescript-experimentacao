import Pege from "./pages/page";
import axios from 'axios';

interface Repositorio{
    full_name: string;
    html_url: string;
}

class PageSobre extends Pege{

    constructor() {
        super();            
    }

    criarItem(menuItem:Repositorio):HTMLElement{
        let li  = document.createElement("li");
        let link = document.createElement("a");
        link.innerText = menuItem.full_name;
        link.href = menuItem.html_url;
        li.append(link);
        return li;
    }

    montarConteudoHTML(): void {
        this.obterConteudoHTML().innerHTML="<p>Usuario: rcoliveira2016<p>";
        const ul = document.createElement('ul');        
        ul.className = "lista-repositorio"
        axios.get<Repositorio[]>('https://api.github.com/users/rcoliveira2016/repos')
        .then(response => {
            response.data.forEach(item => {
                ul.appendChild(this.criarItem(item));
            });
            this.obterConteudoHTML().appendChild(ul);
        });

    }
}

new PageSobre().renderizar();