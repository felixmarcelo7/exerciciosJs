import "./ItemLista.css";

const ItemLista = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.titulo}</td>
            <td>{props.autor}</td>
            <td>{props.ano}</td>
            <td className="text-end">
                {Number(props.preco).toLocaleString("pt-br", {minimumFractionDigits: 2})}
            </td>
            <td className="text-center">
                <img src={props.foto} alt="Capa do Livro" width="75"></img>
            </td>
            <td className="text-center">
                <i className="exclui text-danger fw-bold" title="Exclir">&#10008;</i>
                <i className="altera text-success fw-bold ms-2" title="Alterar">&#36;</i>
            </td>
        </tr>
    );
};
export default ItemLista;