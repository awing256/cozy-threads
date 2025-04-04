import './App.css'
import {CartProvider} from "./components/ShoppingCart/CartContextProvider.tsx";
import {CartDisplay} from "./components/ShoppingCart/CartDisplay.tsx"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Container} from "@mui/material";
import { CatalogList } from './components/Catalog/CatalogList.tsx';

function App() {

  return (
    <>
        <CartProvider>
            <Container maxWidth="xl">
                <Router>
                        <Routes>
                            <Route path="/" element={<CatalogList />} />
                            <Route path="/cart" element={<CartDisplay />} />
                        </Routes>
                </Router>
            </Container>
        </CartProvider>
    </>
  )
}

export default App
