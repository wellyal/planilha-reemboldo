import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button'

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('clicked')} buttonName="Login"/>
  ))

  .add('favicon', () => (
    <Button className="favicon" onClick={action('clicked')} buttonName="+"/>
  ))

  .add('disabled', () => (
    <Button disabled onClick={action('clicked')} buttonName="Confirmar"/>
  ))

  .add('loading', () => (
    <Button className="loading" onClick={action('clicked')} buttonName="Confirmar"/>
  ))