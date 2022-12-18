import React from 'react';
import { Item, List } from './styles';

export default function TrackList() {
  return (
    <List>
      <Item>
        <strong>01.</strong>
        <span>Hanna montana</span>
        <time>3:35</time>
      </Item>
      <Item>
        <strong>02.</strong>
        <span>Hanna Barbera</span>
        <time>2:19</time>
      </Item>
      <Item>
        <strong>03.</strong>
        <span>Hanna Baki</span>
        <time>3:27</time>

      </Item>
    </List>
  );
}
