import { Container } from "./styles";
import { FormEvent, useState } from "react";
import { useRef } from "react";
import { useProducts } from "../../hooks/useProducts";

export function Sidebar() {
    const { handleSearch } = useProducts();
    const searchRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    function handleSearhProducts(event: FormEvent) {
        event.preventDefault();
        handleSearch(searchRef.current.value);
    }

    return (
        <Container>
            <div id="sidebar">
                <div>
                    <form id="search-form" role="search" onSubmit={handleSearhProducts}>
                        <input
                            id="q"
                            aria-label="Search"
                            placeholder="Search"
                            type="search"
                            name="q"
                            ref={searchRef}
                        />

                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div id="detail"></div>
        </Container>
    );
}