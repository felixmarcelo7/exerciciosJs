import { useState, useEffect } from "react";
import { inAxios } from "../config_axios";
import ItemLista from "./ItemLista";

const ManutencaoLivros = () => {
  const [livros, setLivros] = useState([]);

  const obterLista = async () => {
    try {
      const lista = await inAxios.get("Livros");
      setLivros(lista.data);
    } catch (error) {
      alert(`Erro...Não foi possível obter os dados: ${error}`);
    }
  };

  //define o método que será executado assim que o componente for renderizado
  useEffect(() => {
    obterLista();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-7">
          <h4 className="fst-italic mt-3">Manutenção</h4>
        </div>
        <div className="col-sm-5">
          <form>
            <div className="input-group mt-3">
              <input
                type="text"
                className="form-control
                            "
                placeholder="Título ou autor"
                required
              />
              <input
                type="submit"
                className="btn btn-primary"
                value="Pesquisar"
              />
              <input type="button" className="btn btn-danger" value="Todos" />
            </div>
          </form>
        </div>
      </div>

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Cód.</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Ano</th>
            <th>Preço</th>
            <th>Foto</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
        {livros.map((livro) => (
          <ItemLista
            key={livro.id}
            id={livro.id}
            titulo={livro.titulo}
            autor={livro.autor}
            ano={livro.ano}
            preco={livro.preco}
            foto={livro.foto}
          />
        ))}
        </tbody>
      </table>
    </div>
  );
};
export default ManutencaoLivros;
