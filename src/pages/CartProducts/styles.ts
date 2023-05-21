import { styled } from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;
    
    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius:0.25rem;

            a {
                text-decoration: none;
                color: var(--red);
            }

            &:first-child {
                color: var(--text-title);
            } 
        }
    }
`;