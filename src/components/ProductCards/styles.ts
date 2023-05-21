import { styled } from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 1rem;

    a {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        text-decoration: none;

        header {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        h4 {
            font-size: 1rem;
            font-weight: 400;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 1rem;
            font-weight: 600;
            line-height: 2rem;
        }

        transition: filter 0.2s;
        
        &:hover {
            filter: brightness(0.9);
        }
    } 
`;