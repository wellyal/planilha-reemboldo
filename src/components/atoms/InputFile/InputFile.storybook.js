import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import InputFile from './InputFile'

storiesOf('InputFile', module)
  .add('default', () => (
    <InputFile onClick={action('clicked')}/>
))