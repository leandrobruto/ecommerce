import { Header } from "../components/Header";
import { GlobalStyle } from "../styles/global";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({children}: LayoutProps) {
    return (
        <>
            <Header />
            {children}
            <GlobalStyle />
        </>
    );
}