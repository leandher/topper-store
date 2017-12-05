import { ProdutoComponent } from "../produto/produto.component";

class Carrinho {
    private static instance: Carrinho;
    private itens: ProdutoComponent[];

    private constructor() {
        // do something construct...
    }
    static getInstance() {
        if (!Carrinho.instance) {
            Carrinho.instance = new Carrinho();
            // ... any one time initialization goes here ...
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