import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 170px;
    justify-content: center;
    align-items: center;
    gap:10px;
`
export const Title = styled.h3`
    font-size: var(--fontMedium);
    color: var(--tertiary);
`
export const Description = styled.h4`
    font-size: var(--fontSmall);
    color: var(--secondary);
`
export const AlbumFolder = styled.img`
    height: 170px;
    width: 170px;
    background-color: purple;
`