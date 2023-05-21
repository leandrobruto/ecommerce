import { useCategories } from "../../hooks/useCategories";
import { useProducts } from "../../hooks/useProducts";
import { Container } from "./styles";


interface Category {
    title: string;
}

export function Summary() {
    const { categories } = useCategories();
    const { handleCategory, category: currentCategory } = useProducts();

    function handleCategories(category: string) {
        handleCategory(category);
    }

    function isCurentCategory(category: Category) {
        return currentCategory === category.title;
    }
    
    return (
        <Container>
            {categories.map((category) => (
                <div key={category.id}>
                    <span onClick={() => handleCategories(category.title)}>
                    <strong>{category.title}</strong>
                    </span>
                    { isCurentCategory(category) && <button onClick={() => handleCategories('')}>X</button> }
                    
                </div>
            ))}
        </Container>
    );
}