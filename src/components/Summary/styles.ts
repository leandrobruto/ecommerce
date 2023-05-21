import { styled } from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    div {
        background: var(--shape);
        padding: 1rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        text-align: center;
        
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            padding: 1rem;
            font-size: 1rem;
            font-weight: 500;
            line-height: 2rem;
            text-align: center;
        }

        &.highlight-background {
            background: var(--green);
            color: #fff;
        }

        transition: filter 0.2s;
        
        &:hover {
            filter: brightness(0.9);
        }
    } 
`;