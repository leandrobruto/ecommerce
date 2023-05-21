import { Layout } from "../../layouts/default";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { ShoppingCart } from "../../components/ShoppingCart";

export function CartProducts() {
    const { cart } = useCart();
    return (
        <Layout>
            <Container>
                <ShoppingCart products={cart.products} />
                <Link to="/">Back</Link>
            </Container>
        </Layout>
    );
}