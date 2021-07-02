
// ====================================================================
// 9. Uma requisição a um servidor é feita, caso o valor enviado para o
// servidor seja uma cadeia de caracteres, o mesmo devolve essa cadeia
// de caracteres em caixa-alta, caso contrário um erro é devolvido
// informando “the request value is not supported”. Implemente uma
// Promise que simule o caso descrito e implemente um teste para o caso
// de sucesso e de erro. Além disso, a simulação deve conter um atraso
// aleatório de 500 milissegundo a 2 segundos, simulando o atraso da
// comunicação com o servidor. Dica: pesquisar sobre a função
// setTimeout.
// R:
function rnd(min, max){
    return Math.random() * (max - min) + min
}

var str = 'requisição'

function query(
) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let queryResult;
            if (typeof str == typeof ''){
                queryResult = {
                    status:200,data: str.toUpperCase()
                };
            }
            else {
                queryResult= {
                    status: 404,data: 'the request value is not supported',
                };
            }
            if (queryResult.status === 200) resolve(queryResult);
            else reject(queryResult)
        },rnd(500,2000))
    })
}
function testes (){
    query(1)
    .then(result => console.log(result)).catch(result => console.log(result))
}
// testes()

// ====================================================================

// ====================================================================
// 10.Uma empresa de luz precisa de um software que monitore o estado das
// lâmpadas (acesa, apagada) instaladas nos postes de energia.
// Considerando que esses postes possuem lâmpadas inteligentes que
// acendem durante a noite e mantêm-se apagadas durante o dia. Saber
// se estão de fato acesas ou apagadas seriam de grande valor pois assim
// seria possível identificar lâmpadas queimadas. Desta forma, implemente
// uma função que, a cada intervalo aleatório de tempo entre 2 e 4
// segundos, troque o estado da lâmpada e retorne para um callback que
// deve exibir no console o estado atual da lâmpada. Dica: pesquisar sobre
// a função setInterval.
// R: 
function monitoramentoLampadas(){
    var status = false

    setInterval(() => {
            status = status ? false : true
            console.log(status ? "Ligada":"Desligada")
        },rnd(2000,4000)
    )
}
// monitoramentoLampadas()

// ====================================================================

// ====================================================================
// 11. Um professor de algoritmos está ensinando seus alunos a
// implementarem árvores binárias e cobra o seguinte exercício:
// “Implemente uma árvore binária cujo nó raiz seja um número qualquer. A
// árvore deve conter um método para criar 2 nós folha à direita e à
// esquerda do nó raiz, sendo ambos números quaisquer diferentes do
// valor do nó raiz e a estrutura deve automaticamente colocar o maior
// número informado à direita do nó raiz e o menor número informado à
// esquerda.”
// Implemente o exercício descrito acima usando as classes JavaScript.
// Deverá haver uma classe “Folha”, uma classe “No” e uma classe
// “Arvore”. A classe “Arvore” deve ser responsável por criar o nó raiz e
// deve conter o método que cria os nós folha baseados nos critérios do
// exercício descrito. Além disso, deve haver um modo de checar se o nó é
// um nó folha ou não e na execução da aplicação teste devem haver
// console.log’s informando o nó raiz e seus filhos e quais os tipos de cada
// nó (nó ou nó folha). Use conceitos de OO tais como herança.
/*R: */

class Leaf{
    constructor(value){
        this.value = value
    }
}

class Node extends Leaf{
    constructor(value){
        super(value)
        this.right = null
        this.left = null
    }
}

class Root {
    constructor(value){
        this.root = null
    }

    insertNode(newValue){
        var newNode = new Leaf(newValue)
        
        if(this.value == null){
            this.value = novo 
        }else{
            this.insertLeafNo(This.value,newValue)
        }
    }

    insertLeafNo(oldNode,newNode){
        if(newNode.value<oldNode.value){
            if(oldNode.left==null){
                oldNode.left = newNode
            }else{
                this.insertLeafNode(oldNode.left, newNode)
            }
        }else{
            if(oldNode.right==null){
                oldNode.right = newNode
                // console.log(this.checkNodeLeaf())
            }else{
                this.insertLeafNode(oldNode.right, newNode)
            }
            
        }

    }

    checkNodeRoot(node){
        console.log(node.value + ("= Nó Raiz"))
        this.checkNodeFolha(node)
    }

    checkNodeLeaf(node){
        if(node.left==null && node.right == null){
            console.log(node.value + "Nó Folha")
        }else {
            if(node.left!=null){
                this.checkNodeLeaf(node.left)
            }
            if(node.right != null){
                this.checkNodeLeaf(node.right)
            }
        }
    }

}

