import React from 'react';
import SlideInOut from '../SlideInOut';
import {render, cleanup} from '@testing-library/react';
import * as emotion from 'emotion';
import {createSerializer} from 'jest-emotion';

expect.addSnapshotSerializer(createSerializer(emotion));

afterEach(cleanup);

jest.useFakeTimers();

const Content = () => <div>Test content</div>;
const testProps = {
  duration: 123,
  children: <Content />,
  maxHeight: 300,
};

test('animating in', () => {
  const {container, rerender} = render(<SlideInOut in={false} {...testProps} />);

  rerender(<SlideInOut in {...testProps} />);

  expect(container).toMatchSnapshot();

  jest.runTimersToTime(123);
  expect(container).toMatchSnapshot();
});

test('animating out', () => {
  const {container, rerender} = render(<SlideInOut in={true} {...testProps} />);

  rerender(<SlideInOut in={false} {...testProps} />);

  expect(container).toMatchSnapshot();

  jest.runTimersToTime(123);
  expect(container).toMatchSnapshot();
});
