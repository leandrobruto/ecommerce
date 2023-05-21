import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {

        color: var(--text-title);
        text-decoration: none;
    }

    .appShoppingCart {
        display: flex;
        color: powderblue;

        transition: filter 0.2s;
        
        &:hover {
            filter: brightness(0.8);
        }
    }
`;