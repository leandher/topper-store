import { ProdutoComponent } from "../produto/produto.component";

export class Carrinho {
    private static instance: Carrinho;
    itens: ProdutoComponent[] = [];

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
        let idProduto = this.itens.findIndex(i => i.idProduto === produto.idProduto);
        if(idProduto == -1){
            produto.quantidade = 1;
            produto.valorTotal = produto.valor;
            this.itens.push(produto);
        } else{
            this.itens[idProduto].quantidade++;
            this.itens[idProduto].valorTotal = this.itens[idProduto].valor*this.itens[idProduto].quantidade++;
        }
        console.log(this.itens);
    }

    removeItem(produto: ProdutoComponent){
        this.itens.splice(1, this.itens.indexOf(produto));
    }
}