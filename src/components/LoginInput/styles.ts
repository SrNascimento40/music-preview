import styled from 'styled-components'

export const Container = styled.div`
    background-color: var(--primary);
    display: flex;
    flex-direction: column;
`
export const InputForm = styled.input`
    font-size: var(--fontMedium);
    line-height: var(--fontMedium);
    background-color: transparent;
    color: #FFF;
    font-weight: bold;
    height: 40px;
    padding: 0 0.25rem;
    border: 0;
    border-bottom: 2px solid var(--secondary);
    outline: 0;
`