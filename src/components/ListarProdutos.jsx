
export default function ListarProdutos({  lista  }){
    return(
        <div className="card-container">
        {
        lista.map((produto) => (
          <div className="card-main" key={produto.id}>
            <div className="card-principal">
              <img className="card" src={produto.imagem} alt="" />
            </div>
            <p className="card-p">{produto.item}</p>
            {
            produto.tamanho.map((size) => (
              <p className="card-p">{size}</p>
               ))}

                    <p className="card-p">{produto.preco}</p>
            <p className="card-p">{produto.composicao}</p>
            <button className="button-principal" onClick={() => adicionarPedidos(produto)}>Comprar</button>
          </div>
        ))}
      </div>
      

    )
}