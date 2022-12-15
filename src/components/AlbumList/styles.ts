import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    padding: 0px var(--mainPadding) 65px;
`
export const Subtitle = styled.h2`
    font-size: var(--fontMedium);
    color: var(--tertiary);
    margin: 0 0 35px;
`
export const Wrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    overflow-x: clip;
    gap: 65px;
`