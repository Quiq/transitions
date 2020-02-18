import React from 'react';
import SlideInOut from '../SlideInOut';
import TestContent from './TestContent';
import {withKnobs, boolean, number, select} from '@storybook/addon-knobs';

export default {
  component: SlideInOut,
  title: 'SlideInOut',
  // excludeStories: /_.*$/
};

export const Default = () => (
  <SlideInOut
    in={boolean('in')}
    duration={number('duration', 300)}
    maxHeight={number('maxHeight', 200)}
    inFrom={select('inFrom', ['left', 'right'], 'left')}
    outToward={select('outToward', ['left', 'right'], 'right')}
  >
    <TestContent />
  </SlideInOut>
);

Default.story = {
  decorators: [withKnobs],
};
