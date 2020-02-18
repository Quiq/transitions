import React from 'react';
import VerticalSlide from '../VerticalSlide';
import TestContent from './TestContent';
import {withKnobs, boolean, number} from '@storybook/addon-knobs';

export default {
  component: VerticalSlide,
  title: 'VerticalSlide',
  // excludeStories: /_.*$/
};

export const Default = () => (
  <VerticalSlide
    in={boolean('in')}
    duration={number('duration', 300)}
    maxHeight={number('maxHeight', 200)}
    alsoFade={boolean('alsoFade')}
  >
    <TestContent />
  </VerticalSlide>
);

Default.story = {
  decorators: [withKnobs],
};
