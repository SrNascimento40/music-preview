import React from 'react';
import { Column, Container, Row } from './styles';
import AlbumItem from '../../components/AlbumItem';
import TrackList from '../../components/TrackList';

export default function ListTrack() {
  
  return (
    <Container>
      <Row>
        <h2 onClick={} > Voltar</h2>
      </Row>
      <Column>
        <AlbumItem size="large" title="Filosofem" description='Burzum' imgSize='large'/>
        <TrackList />
      </Column>
    </Container>
  );
}
