import imgDefault from "../../assets/imgDefault.jpeg"
import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";

export function CategoryInfo() {
    const { products } = useProducts();
    
    return (
        <>
            {products.map((product) => (
                <Link to={`/products/${product.id}`} key={product.id} className="link">
                    <header>
                        <img src={imgDefault} alt="Product Image" />
                    </header>
                    <strong>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(product.price)}    
                    </strong>
                    <h4>{product.title}</h4>
                </Link>
            ))}
        </>
    );
}
