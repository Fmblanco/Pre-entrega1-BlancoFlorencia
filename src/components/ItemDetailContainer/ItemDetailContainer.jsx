import { getProductoById } from "../../asyncMock"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    const {itemId} = useParams();

    
        useEffect(() => {
        getProductoById (itemId)
        .then(res => setProducto(res))
        .catch(error => console.error(error))
     },[itemId])

     return(
        <div className="ItemDetailContainer">
            <ItemDetail {...producto} />
        </div>
     )
}

export default ItemDetailContainer