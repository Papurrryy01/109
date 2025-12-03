import { createContext } from "react";

// Global Context for the application
const GlobalContext = createContext({
    cart: [], //default cart is an empty array
    user: {}, //default user is an empty object, can store user info like name, email, etc.

    addProductToCart: () => {}, //placeholder function to add product to cart
    clearCart: () => {}, //placeholder function to clear the cart
    removeProductFromCart: () => {}, // placeholder function to remove product from cart
});
// Export the context to be used in other parts of the application
export default GlobalContext;