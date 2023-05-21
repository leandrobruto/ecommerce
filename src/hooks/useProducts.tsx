import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { api } from "../services/api";


interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    description: string;
}

type ProductInput = Omit<Product, 'id'>;

interface ProductsProviderProps {
    children: ReactNode;
}

interface ProductsContextData {
    products: Product[];
    category: string;
    createProduct: (Product: ProductInput) => Promise<void>;
    handleSearch: (query: string) => void;
    handleCategory: (category: string) => void
}

const ProductsContext = createContext<ProductsContextData>(
    {} as ProductsContextData
);

export function ProductsProvider({ children }: ProductsProviderProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState<string>('');
    const [category, setCategory] = useState<string>('');

    useEffect(() => {
        api.get('/products')
            .then(response => setProducts(response.data))
    }, []);

    async function createProduct(ProductInput: ProductInput) {
        const response = await api.post('/products', {
            ...ProductInput,
            createdAt: new Date(),
        });
        const { product } = response.data;
        
        setProducts([
            ...products,
            product,
        ]);
    }

    function handleCategory(category: string) {
        setCategory(category);
    }

    function handleSearch(query: string) {
        setSearch(query);
    }

    function applyCategory(products: Product[]) {
        if (category.length) return products.filter(
            product => product.category.toLowerCase().includes(category.toLowerCase()));

        return products;
    }

    function applySearch(products: Product[]) {
        if (search.length) return products.filter(
            product => product.title.toLowerCase().includes(search.toLowerCase()));

        return products;
    }

    return (
        <ProductsContext.Provider value={{ 
                products: applySearch(applyCategory(products)), 
                createProduct, 
                handleSearch,
                handleCategory,
                category
             }}>
            { children }
        </ProductsContext.Provider>
    );
}

export function useProducts() {
    const context = useContext(ProductsContext);

    return context;
}