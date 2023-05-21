import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Container } from "./styles";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { Layout } from "../../layouts/default";

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
                <Link to="/">Back</Link>
            </Container>
        </Layout>
    );
}