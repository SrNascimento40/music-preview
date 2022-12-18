import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: var(--${(props: { size: string }) => props.size});
    justify-content: var(--${(props: { size: string }) => props.size});
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
    height: var(--${(props: { imgSize: string }) => props.imgSize});
    width: var(--${(props: { imgSize: string }) => props.imgSize});
    background-color: purple;
`