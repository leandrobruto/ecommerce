import { ReactNode, useContext, useEffect, useState, createContext } from "react";

interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    description: string;
    quantity: number;
}

interface CartProviderProps {
    children: ReactNode;
}

interface CartInterface {
    products: Product[];
    summary: Object;
}

interface CartContextData {
    cart: CartInterface;
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextData>(
    {} as CartContextData
);

export function CartProvider({ children }: CartProviderProps) {
    const currentLocalStorageData = localStorage.getItem("storageCart"); 

    const INITIAL_CART = currentLocalStorageData ? JSON.parse(currentLocalStorageData) : {
        products: [],
        summary: {}
    }

    const [cart, setCart] = useState<CartInterface>(INITIAL_CART);

    function addToCart(product: Product) {
        const products = [...cart.products, product];
       
        const payload = {...cart, products}
        setCart(payload);
        localStorage.setItem("storageCart", JSON.stringify(payload));
    }

    function removeFromCart(product: Product) {
        const products = [...cart.products];
       
        const newProducts = products.filter(productCart => productCart.id !== product.id);

        const payload = {...cart, products: newProducts}
        
        setCart(payload);
        localStorage.setItem("storageCart", JSON.stringify(payload));
    }

    function clearCart() {
        setCart({
            products: [],
            summary: {}
        });
        localStorage.clear();
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            { children }
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    return context;
}