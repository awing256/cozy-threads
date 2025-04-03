import './App.css'
import {CartProvider} from "./components/ShoppingCart/CartContextProvider.tsx";
import {CartDisplay} from "./components/ShoppingCart/CartDisplay.tsx"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Container} from "@mui/material";
import { CatalogList } from './components/Catalog/CatalogList.tsx';

function App() {

  return (
    <div>
        <CartProvider>
            <Router>
                <Container maxWidth="lg">
                    <Routes>
                        <Route path="/" element={<CatalogList />} />
                        <Route path="/cart" element={<CartDisplay />} />
                    </Routes>
                </Container>
            </Router>
        </CartProvider>
    </div>
  )
}

export default App
