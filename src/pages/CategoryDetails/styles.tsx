import { styled } from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    button {
        padding: 0 0.5rem;
        width: 100px;
        height: 2rem;
        background: var(--blue-light);
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

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
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

        button {
            width: 80%;
            padding: 0 1rem;
            height: 3rem;
            background: var(--green);
            color: #fff;
            border-radius: 0.25rem;
            border: 0;
            font-size: 1rem;
            margin-top: 1rem;
            font-weight: 600;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9);
            }
        }
    } 
`;