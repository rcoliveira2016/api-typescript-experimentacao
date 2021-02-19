
interface MenuItem{
    nome: string;
    link: string;
}

export default class Herder {

    navBar: HTMLElement;
    ulPrincipal: HTMLElement;
    header:HTMLHeadElement;

    constructor() {        
        this.navBar = document.createElement('nav');
        this.ulPrincipal = document.createElement('ul');
        this.header = document.createElement('header');
        this.header.appendChild(this.navBar);
        this.createMenu();
    }

    criarItem(menuItem:MenuItem):HTMLElement{
        let li  = document.createElement("li");
        let link = document.createElement("a");
        link.innerText = menuItem.nome;
        link.href = menuItem.link;
        li.append(link);
        return li;
    }

    createMenu(){
        this.ulPrincipal.classList.add("menu")

        let itensMenu:MenuItem[] = [
            {nome:"Home",link:"index.html"},
            {nome:"Sobre",link:"sobre.html?user=rcoliveira2016"},
        ];
        itensMenu.forEach(item => {
            this.ulPrincipal.appendChild(this.criarItem(item));
        });

        this.navBar.appendChild(this.ulPrincipal);
    }

}