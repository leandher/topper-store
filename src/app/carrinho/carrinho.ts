import { ProdutoComponent } from "../produto/produto.component";

export class Carrinho {
    private static instance: Carrinho;
    private itens: ProdutoComponent[] = [];

    private constructor() {}
    
    static getInstance() {
        if (!this.instance) {
            this.instance = new Carrinho();
        }
        return this.instance;
    }

    getItens(): ProdutoComponent[] {
        return this.itens;
     }

    addItem(produto: ProdutoComponent){
        console.log(this.itens);
        this.itens.push(produto);
    }

    removeItem(produto: ProdutoComponent){
        this.itens.splice(1, this.itens.indexOf(produto));
    }
}