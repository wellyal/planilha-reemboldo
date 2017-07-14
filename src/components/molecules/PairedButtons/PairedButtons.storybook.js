import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import EditIcon from 'react-icons/lib/ti/edit'
import DeleteIcon from 'react-icons/lib/ti/trash'
import PairedButtons from './PairedButtons'

storiesOf('PairedButtons', module)
  .add('default', () => (
    <PairedButtons onClick={action('clicked')}>
      <EditIcon size={30} color="#2c6cc3"/>
      <DeleteIcon size={30} color="#2c6cc3"/>
    </PairedButtons>
))