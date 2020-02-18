import * as React from 'react';
import {Transition} from 'react-transition-group';
import styled, {css, keyframes} from 'react-emotion';
import {TransitionStatus} from 'react-transition-group/Transition';

export type SlideInOutProps = {
  in?: boolean;
  inFrom?: 'left' | 'right';
  outToward?: 'left' | 'right'; // According to Grammarly, "'Toward' is the preferred spelling in the United States and Canada."
  maxHeight: number;
  duration: number;
  children: React.ReactNode;
};

const slideIn = (maxHeight: number, inFrom: 'left' | 'right') => keyframes`
  from {
    max-height: 0px;
    transform: translateX(${inFrom === 'left' ? '-100%' : '100%'});
  }
  to {
    max-height: ${maxHeight}px;
    transform: translateX(0);
  }
`;

const slideOut = (maxHeight: number, outToward: 'left' | 'right') => keyframes`
  from {
    max-height: ${maxHeight}px;
    transform: translateX(0);
  }
  to {
    max-height: 0px;
    transform: translateX(${outToward === 'left' ? '-100%' : '100%'});
  }
`;

interface SlideStyleProps {
  transition: TransitionStatus;
  maxHeight: number;
  inFrom: 'left' | 'right';
  outToward: 'left' | 'right';
  duration: number;
}

const SlideContent = styled('div')<SlideStyleProps>`
  animation-fill-mode: forwards;

  ${props =>
    props.transition === 'entering' &&
    css`
      animation: ${slideIn(props.maxHeight, props.inFrom)} ${props.duration}ms 1;
      overflow: hidden;
    `};

  ${props =>
    props.transition === 'exiting' &&
    css`
      animation: ${slideOut(props.maxHeight, props.outToward)} ${props.duration}ms 1;
      overflow: hidden;
    `};
`;

export const SlideInOut = ({
  in: inProp,
  maxHeight,
  duration,
  children,
  inFrom = 'left',
  outToward = 'right',
}: SlideInOutProps) => (
  <Transition in={inProp} timeout={duration} mountOnEnter unmountOnExit>
    {transition => (
      <SlideContent
        maxHeight={maxHeight}
        duration={duration}
        transition={transition}
        inFrom={inFrom}
        outToward={outToward}
      >
        {children}
      </SlideContent>
    )}
  </Transition>
);

export default SlideInOut;
