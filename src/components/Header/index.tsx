import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container, Content } from "./styles";
import { useCart } from '../../hooks/useCart';

export function Header() {
    const { cart } = useCart();

    return (
        <Container>
            <Content>
                <Link to="/" >
                    <img src="" alt="e-commerce" />
                </Link>
                <Link to="/shoppingchart" >
                    <strong>{cart.products.length}</strong>
                    <FaShoppingCart className="appShoppingChart" />
                </Link>
            </Content>
        </Container>
    );
}