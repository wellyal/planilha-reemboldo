import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button'

storiesOf('Button', module)
  .add('default', () => (
    <Button className="default" onClick={action('clicked')} buttonName="Login"/>
  ))

  .add('secondary', () => (
    <Button className="secondary" onClick={action('clicked')} buttonName="Login"/>
  ))

  .add('favicon', () => (
    <Button className="favicon" onClick={action('clicked')} buttonName="+"/>
  ))

  .add('disabled', () => (
    <Button disabled onClick={action('clicked')} buttonName="Confirmar"/>
  ))

  .add('loading', () => (
    <section>
      <div>
        <Button className="loading secondary" onClick={action('clicked')} buttonName="Confirmar"/>
      </div>
      <div>
        <Button className="loading default" onClick={action('clicked')} buttonName="Confirmar"/>
      </div>
    </section>
  ))