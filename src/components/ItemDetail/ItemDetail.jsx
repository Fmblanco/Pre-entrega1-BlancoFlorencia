import "./ItemDetail.css"
import { useState } from "react";

const ItemDetail = ({id, nombre, img, precio, stock}) => {
    let inicial = 1
    const [contador, setContador] = useState(inicial);
        

    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const disminuirContador = () => {
        if( contador > inicial) {
            setContador(contador - 1);
        }
    }
    return (

        <div className="contenedorItem">
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3> Id: {id} </h3>
            <p> Descripcion del producto </p>
            <img src={img} alt={nombre} />
            <div>
            <button onClick={ disminuirContador }> - </button>
            <strong> {contador} </strong>
            <button onClick={ aumentarContador }> + </button>
            <button> Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail