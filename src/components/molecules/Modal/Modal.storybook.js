import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Modal from './Modal'

storiesOf('Modal', module)
  .add('default', () => (
    <Modal>
      <h1>blablabal</h1>
    </Modal>
  ))