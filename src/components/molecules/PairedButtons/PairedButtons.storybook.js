import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PairedButtons from './PairedButtons'

storiesOf('PairedButtons', module)
  .add('default', () => (
    <PairedButtons onClick={action('clicked')}/>
))