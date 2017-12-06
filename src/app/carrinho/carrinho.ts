import { ProdutoComponent } from "../produto/produto.component";

class Carrinho {
    private static instance: Carrinho;
    private itens: ProdutoComponent[];

    private constructor() {}
    
    static getInstance() {
        if (!Carrinho.instance) {
            Carrinho.instance = new Carrinho();
        }
        return Carrinho.instance;
    }

    getItens(): ProdutoComponent[] {
        return this.itens;
     }

    addItem(produto: ProdutoComponent){
        this.itens.push(produto);
    }

    removeItem(produto: ProdutoComponent){
        
    }
}