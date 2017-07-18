import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button'

storiesOf('Button', module)
  .add('default', () => (
    <Button className="default" onClick={action('clicked')}>
      Login
    </Button>
  ))

  .add('secondary', () => (
    <Button className="secondary" onClick={action('clicked')}>
      Login
    </Button>
  ))

  .add('favicon', () => (
    <Button className="favicon" onClick={action('clicked')}>
      +
    </Button>
  ))

  .add('disabled', () => (
    <Button disabled onClick={action('clicked')}>
      Confirmar
    </Button>
  ))

  .add('loading', () => (
    <section>
      <div>
        <Button className="loading secondary" onClick={action('clicked')}>
          Confirmar
        </Button>
      </div>
      <div>
        <Button className="loading default" onClick={action('clicked')}>
          Confirmar
        </Button>
      </div>
    </section>
  ))