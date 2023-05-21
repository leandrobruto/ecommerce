import { Container } from "./styles";
import { Link } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";

interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    description: string;
    quantity: number;
}

interface ProductsCartProps {
    products: Product[];
}

export function ShoppingCart({products}: ProductsCartProps) {
    const { clearCart, removeFromCart } = useCart();
    const isEmpty = !products.length;

    const navigate = useNavigate();

    function handleRemoveFromCart(product: Product) {
        removeFromCart(product);
    }

    function handleClearCart() {
        clearCart();
    }

    function handleConfirmCart() {
        clearCart();
        navigate("/success");
    }

    const amountCart = products.reduce((acc, product) => {
        acc += (product.quantity * product.price)

        return acc;
    }, 0)

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Valor</th>
                        <th>Quantidade</th>
                        <th>Total</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(product.price)}
                            </td>
                            <td>{product.quantity}</td>
                            <td>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(product.price * product.quantity)}
                            </td>
                            <td>
                            <button onClick={() => handleRemoveFromCart(product)}>
                                <FaTrashAlt className="appShoppingCart" />
                            </button>   
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            {isEmpty ? (<h5>Empty cart</h5>) : (
                <div>
                    <div>
                        <strong>Total</strong>
                        <strong>{new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(amountCart)}
                        </strong>
                    </div>
                    <div>
                        <Link to="/shoppingcart" >
                            <button onClick={handleClearCart} className="clearCartButton">
                                <div>
                                    <p>Clear cart</p>
                                    <span>
                                        <FaTrashAlt className="appShoppingCart" />
                                    </span>
                                </div>
                            </button>    
                        </Link>
                        <button onClick={handleConfirmCart}>
                            <div>
                                <p>Confirm buy</p>
                                <span>
                                    <FaCheck className="appShoppingCart" />
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            )}
            
        </Container>
    );
}