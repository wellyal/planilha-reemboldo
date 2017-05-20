import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from 'components/atoms/Button'
import Input from 'components/atoms/Input'
import InputFile from 'components/atoms/InputFile'

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

storiesOf('Input', module)
  .add('default', () => (
    <Input />
))

storiesOf('InputFile', module)
  .add('default', () => (
    <InputFile onClick={action('clicked')}/>
))