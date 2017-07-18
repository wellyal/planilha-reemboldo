import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ListItem from './ListItem'

const props = {
  date: 'jul/2017',
  type: 'Refeição',
  value: '12,45',
  index: '1'
}

storiesOf('ListItem', module)
  .add('default', () => (
    <ListItem {...props} />
  ))