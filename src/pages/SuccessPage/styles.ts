import { styled } from "styled-components";

export const Container = styled.div`

    div {
        background: var(--shape);
        padding: 1rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        text-align: center;
    }

    button {
        padding: 0 0.5rem;
        width: 200px;
        height: 2rem;
        background: var(--blue);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 400;

        a {
            text-decoration: none;
            font-size: 1rem;
            padding-right: 1rem;
        }        

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

`;