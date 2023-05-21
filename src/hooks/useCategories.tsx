import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { api } from "../services/api";

interface Category {
    id: number;
    title: string;
    description: string;
}

interface CategoriesProviderProps {
    children: ReactNode;
}

interface CategoriesContextData {
    categories: Category[];
}

const CategoriesContext = createContext<CategoriesContextData>(
    {} as CategoriesContextData
);

export function CategoriesProvider({ children }: CategoriesProviderProps) {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        api.get('/categories')
            .then(response => setCategories(response.data))
    }, []);
        
    return (
        <CategoriesContext.Provider value={{ 
                categories: categories
             }}>
            { children }
        </CategoriesContext.Provider>
    );
}

export function useCategories() {
    const context = useContext(CategoriesContext);

    return context;
}