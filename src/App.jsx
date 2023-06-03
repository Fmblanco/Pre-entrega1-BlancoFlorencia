import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting= {"Conocé toda la colección"}/> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }/>
          <Route path='/Item/:itemId' element={ <ItemDetailContainer/> }/>
          <Route path="/Cart" element={<Cart/>} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path="*" element={<h2> Sitio en construccion </h2>} />
        </Routes>

      </CarritoProvider>
      </BrowserRouter>

    </>

 );
}

export default App;