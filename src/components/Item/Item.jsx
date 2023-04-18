import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({id, nombre, img, precio, stock}) => {

    return (
        <article className="CardProducto">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p className="info">
                    Precio: ${precio}
                </p>
                <p className="info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link className="btnProducto" to={`/Item/${id}`}> Ver detalle del producto</Link>
            </footer>
        </article>
    )
}

export default Item