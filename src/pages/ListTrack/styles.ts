import styled from 'styled-components'

export const Container = styled.div`
    color: var(--secondary);
    width: 100%;
    padding: 0px var(--mainPadding);

    h2{
        font-size: var(--fontSmall);
        font-weight: normal;
        padding: 15px 0 30px;
    }
`
export const Row = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-direction:row;
`
export const Column = styled.div`
    display:grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    gap: 35px;
`