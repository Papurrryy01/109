import { useState } from "react"
import GlobalContext from "./globalContext"

// Global Provider component to wrap the application and provide global state
function GlobalProvider(props) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({id: 62, name: "Carlos"});

    // Function to add a product to the cart
    function addProductToCart(product) {
        setCart((prevCart) => [...prevCart, product]);
    }
    
    // Function to remove a product from the cart by its id
    function removeProductFromCart(productId) {
        setCart((prevCart) => prevCart.filter(product => product.id !== productId));
    }
    
    // Function to clear the entire cart
    function clearCart() {
        setCart([]);
    }
    return (
        <GlobalContext.Provider value={{
            cart,
            user,
            addProductToCart,
            removeProductFromCart,
            clearCart
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}


export default GlobalProvider;