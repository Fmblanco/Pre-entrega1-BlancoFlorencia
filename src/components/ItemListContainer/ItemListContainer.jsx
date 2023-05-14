import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getProductos, getProductosPorCategoria } from '../../asyncMock'
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
/* import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from "../../service/Firebase/config"; */


const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams ();

    useEffect(() => {
      const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

      funcionProductos (idCategoria)
          .then(res =>  setProductos(res))
          .catch(error => console.error(error))
  }, [idCategoria])
   /*  useEffect( ()=> {
      const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)): collection(db, "productos");

      getDocs(misProductos)
          .then(res=> {
              const nuevosProductos = res.docs.map( doc => {
                  const data = doc.data()
                  return {id:doc.id, ...data}
              })
              setProductos(nuevosProductos)
          }) 
          .catch(error => console.log(error))
  }, []) */
  return (
    <div>
      <h2 className='subTitulo'> {greeting} </h2>
      <ItemList productos={productos}/>
    </div>
  )
  }

  export default ItemListContainer