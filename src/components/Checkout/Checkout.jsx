import { useContext, useState } from 'react'
import './Checkout.css'
import { CarritoContext } from '../../context/CarritoContext'
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
/* const Checkout = () => {
    const { cart, clearCart } = useContext(CarritoContext)
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')

    const handleCheckout = (event) => {
        event.preventDefault()

        if (!nombre || !apellido || !telefono) {
            setError("Por favor, verifique los campos sin completar")
            return
        }


        const order = {
            items: cart.map((product) => ({
                id: product.item.id,
                producto: product.item.nombre,
                cantidad: product.cantidad
            })),
            total: cart.reduce((total, product) => total + product.item.precio * product.cantidad, 0),
            nombre,
            apellido,
            telefono,
        }

        addDoc(collection(db, "orders"), order)
            .then((docRef) => {
                setOrderId(docRef.id)
                clearCart();
            })
            .catch((error) => {
                console.error("Error al generar la orden", error)
                setError("Se produjo un error al generar la orden, vuelva a intentarlo más tarde")
            })
    }

  return (
    <div className='item-detail-container card-item container'>
        <h2 className='header text-center mb-5 p-4'>Revisa tu orden y completa el formulario para finalizar tu compra</h2>
        <form className='mb-3' onSubmit={handleCheckout}>
            {cart.map((product) => (
                <div className='mb-5' key={product.item.id}>
                    <p>
                        {product.item.nombre}  x  {product.cantidad} unidad/es
                    </p>
                    {}
                    <p>Subtotal: $ {product.cantidad * product.item.precio} </p>
                    <hr />
                </div>
            ))}
            <div className='form-group mb-3'>
                <label className='form-label' htmlFor="">Nombre</label>
                <input type="text" className='form-control' value={nombre} onChange={(e) =>
                setNombre(e.target.value)} />
            </div>
            <div className='form-group mb-3'>
                <label className='form-label' htmlFor="">Apellido</label>
                <input type="text" className='form-control' value={apellido} onChange={(e) =>
                setApellido(e.target.value)} />
            </div>
            <div className='form-group mb-3'>
                <label className='form-label' htmlFor="">Telefono</label>
                <input type="tel" className='form-control' value={telefono} onChange={(e) =>
                setTelefono(e.target.value)} />
            </div>
        </form>
        {
            orderId && (
                <div className='mb-5 p-3'><strong>¡Gracias por su compra! Su número de orden es el {orderId}</strong></div>
            )
        }
    </div>
  ) */
/* } */

export default Checkout