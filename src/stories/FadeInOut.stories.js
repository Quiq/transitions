import React, {useState} from 'react';
import FadeInOut from '../FadeInOut';
import TestContent from './TestContent';
import {withKnobs, boolean, number} from '@storybook/addon-knobs';

export default {
  component: FadeInOut,
  title: 'FadeInOut',
  // excludeStories: /_.*$/
};

export const Default = () => (
  <FadeInOut in={boolean('in')} duration={number('duration', 300)}>
    <TestContent />
  </FadeInOut>
);

Default.story = {
  decorators: [withKnobs],
};
