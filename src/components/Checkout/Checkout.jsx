import { useState } from 'react'
import './Checkout.css'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../service/Firebase/config'

const Checkout = () => {
    const [nombre, setNombre] = useState ("");
    const [apellido, setApellido] = useState ("");
    const [telefono, setTelefono] = useState ("");

    const manejadorCheckout = (event) => {
        event.preventDefault();

        addDoc(collection(db, "usuarios"),{
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
    }) 

    setNombre("");
    setApellido("");
    setTelefono("");
}
   
    return (
       <form onSubmit={ manejadorCheckout }>
        <label htmlFor=""> Nombre </label>
        <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />

        <label htmlFor=""> Apellido </label>
        <input type="text" value={apellido} onChange={(event) => setApellido(event.target.value)} />
        
        <label htmlFor=""> Telefono </label>
        <input type="text" value={telefono} onChange={(event) => setTelefono(event.target.value)} />

        <button type='submit'> Enviar </button>
       </form>
    )
}

export default Checkout