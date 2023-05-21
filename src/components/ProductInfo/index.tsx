import { useCart } from "../../hooks/useCart";

import imgDefault from "../../assets/imgDefault.jpeg"
import { useRef } from "react";
import { Link } from "react-router-dom";

interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    description: string;
}

interface ProductInfoProps {
    product: Product;
}

export function ProductInfo({product}: ProductInfoProps) {
    const { addToCart } = useCart();
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    function handleAddToCart() {
        addToCart({...product, 
            quantity: Number(inputRef.current.value),
        });
    }

    return (
        <div>
            <header>
                <img src={imgDefault} alt="Product Image" />
            </header>
            <strong>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(Number(product?.price))}    
            </strong>
            <h4>{product?.title}</h4>
            <Link to={`/category/${product?.category}`}>
                <h4>{product?.category}</h4>
            </Link>
            <h4>{product?.description}</h4>
            <h4>{product?.category}</h4>
            <input type="number" ref={inputRef} name="quantity" min="1"></input>
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    );
}