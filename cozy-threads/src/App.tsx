import './App.css'
import {CatalogList} from "./components/Catalog/CatalogList.tsx";
import {CartProvider} from "./components/ShoppingCart/CartContextProvider.tsx";

function App() {

  return (
    <div>
        <CartProvider>
            <CatalogList/>
        </CartProvider>
    </div>
  )
}

export default App
