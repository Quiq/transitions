import React from 'react';
import FadeInOut from '../FadeInOut';
import {render, cleanup} from '@testing-library/react';
import * as emotion from 'emotion';
import {createSerializer} from 'jest-emotion';

expect.addSnapshotSerializer(createSerializer(emotion));

afterEach(cleanup);

jest.useFakeTimers();

const Content = () => <div>Test content</div>;

test('animating in', () => {
  const testProps = {
    duration: 100,
    children: <Content />,
  };
  const {container, rerender} = render(<FadeInOut in={false} {...testProps} />);

  rerender(<FadeInOut in {...testProps} />);

  expect(container).toMatchSnapshot();

  jest.runTimersToTime(100);
  expect(container).toMatchSnapshot();
});

test('animating out', () => {
  const testProps = {
    duration: 100,
    children: <Content />,
  };
  const {container, rerender} = render(<FadeInOut in={true} {...testProps} />);

  rerender(<FadeInOut in={false} {...testProps} />);

  expect(container).toMatchSnapshot();

  jest.runTimersToTime(100);
  expect(container).toMatchSnapshot();
});
