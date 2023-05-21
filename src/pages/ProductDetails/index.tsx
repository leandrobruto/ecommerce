import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Container } from "./styles";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { Layout } from "../../layouts/default";
import { FaArrowLeft } from 'react-icons/fa';
import { ProductInfo } from "../../components/ProductInfo";

interface ProductProps {
    id: number;
    title: string;
    category: string;
    price: number;
    description: string;
}

export function ProductDetails() {
    const [ product, setProduct ] = useState<ProductProps>();
    const { productId } = useParams();

    useEffect(() => {
        api.get(`/products/${productId}`)
            .then(response => setProduct(response.data));
    }, []);

    
    return (
        <Layout>
            <Container>
                { product && <ProductInfo product={product} />}
                <button>
                    <Link to="/">Back</Link>
                    <FaArrowLeft />
                </button>
            </Container>
        </Layout>
    );
}