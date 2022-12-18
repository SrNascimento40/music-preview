import styled from 'styled-components'

export const List = styled.ul`
    color: var(--secondary);
    display: flex;
    flex-direction: column;
`
export const Item = styled.li`
    display:flex;
    justify-content:space-between;
    margin: 0 0 15px;

    strong {
        display: block;
        width: 30px;
    }
    span {
        display: block;
        width: 100%;
        text-align: left;
    }
    time {
        display: block;
        width: 35px;
    }
`