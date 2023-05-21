import { styled } from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        
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


        input {
            width: 30%;
            padding: 0 0.5rem;
            height: 2rem;
            border-radius: 0.25rem;
            margin-top: 1rem;

            border: 1px solid #d7d7d7;
            background: #e7e9ee;

            font-weight: 400;
            font-size: 1rem;

            &::placeholder {
                color: var(--text-body);
            }

            & + input {
                margin-top: 1rem;
            }
        }

        div {
            align-items: center;
            justify-content: center;

            button {
                width: 80%;
                padding: 0 1rem;
                height: 3rem;
                background: var(--green);
                color: #fff;
                border-radius: 0.25rem;
                border: 0;
                font-size: 1rem;
                font-weight: 600;

                transition: filter 0.2s;

                &:hover {
                    filter: brightness(0.9);
                }
            }
        }
    } 
`;