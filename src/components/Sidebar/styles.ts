import { styled } from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;

    div {
        div {
            form {
                input {
                    background: var(--shape);
                    padding: 0.5rem;
                    margin-top: 0.5rem;
                    font-size: 1rem;
                    border: none;
                }

                button {
                    border-radius: 0.25rem;
                    padding: 6px 10px;
                    margin-top: 1rem;
                    background: var(--blue-light);
                    color: #fff;
                    font-size: 1rem;
                    border: none;
                    cursor: pointer;

                    transition: filter 0.2s;

                    &:hover {
                        filter: brightness(0.9);
                    }
                }
            }
        }
    }
`;