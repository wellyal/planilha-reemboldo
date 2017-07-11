import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ListItem from './ListItem'

storiesOf('ListItem', module)
  .add('default', () => (
    <ListItem />
  ))