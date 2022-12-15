import styled from 'styled-components'

export const Container = styled.div`
    background-color: var(--primary);
    width: 100%;

    display: flex;
    flex-direction: column;
    padding: 0px var(--mainPadding);
    margin-bottom: 75px;
`

export const Input = styled.input`
    font-size: var(--fontXLarge);
    line-height: var(--fontXLarge);
    background-color: transparent;
    color: #FFF;
    font-weight: bold;
    height: 80px;
    padding: 0 0.25rem;
    border: 0;
    border-bottom: 2px solid var(--secondary);
    outline: 0;
`

export const Label = styled.label`
    font-size: var(--fontMedium);
    color: var(--tertiary);
`