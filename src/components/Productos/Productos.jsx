import { useState, useEffect } from "react";
import { db } from "../../service/Firebase/config";
import './Productos.css'
import { collection, doc, query, updateDoc, onSnapshot } from "firebase/firestore";

 const Productos = () => {
    const [productos, setProductos] = useState ([]);


  return (
    <div className="productos">
        {
        productos.map ((producto) => (
            <div className="producto" key={producto.id}>
                <h2> Nombre: {producto.nombre} </h2>
                <p> Precio: {producto.precio} </p>
                <p> Stock: {producto.stock} </p>
                <button> Compra </button>
            </div>
        ))
    }
    </div>
  )
}

export default Productos
