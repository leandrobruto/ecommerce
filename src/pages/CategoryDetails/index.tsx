import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { Layout } from "../../layouts/default";
import { FaArrowLeft } from 'react-icons/fa';
import { useProducts } from "../../hooks/useProducts";
import { CategoryInfo } from "../../components/CategoryInfo";

export function CategoryDetails() {
    const { handleCategory } = useProducts();
    const { categorySlug } = useParams();

    useEffect(() => {
        if (categorySlug) handleCategory(categorySlug);
        return () => {
            handleCategory('');
          };
    }, []);

    return (
        <Layout>
            <Container>
                <CategoryInfo />
                <button>
                    <Link to="/">Back</Link>
                    <FaArrowLeft />
                </button>
            </Container>
        </Layout>
    );
}