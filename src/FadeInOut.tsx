import * as React from 'react';
import {Transition} from 'react-transition-group';
import styled, {css, keyframes} from 'react-emotion';
import {TransitionStatus} from 'react-transition-group/Transition';

export type VerticalSlideProps = {
  in: boolean;
  duration: number;
  children: React.ReactNode;
  className?: string;
};

const fadeIn = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

const fadeOut = keyframes`
  0% {opacity: 1;}
  100% {opacity: 0;}
`;

interface FadeStyleProps {
  transition: TransitionStatus;
  duration: number;
}

const FadeContent = styled.div<FadeStyleProps>`
  ${props =>
    props.transition === 'entering' &&
    css`
      animation: ${fadeIn} ${props.duration}ms ease-in-out 0ms 1 normal both;
      overflow: hidden;
    `};

  ${props =>
    props.transition === 'exiting' &&
    css`
      animation: ${fadeOut} ${props.duration}ms ease-in-out 0ms 1 normal both;
      overflow: hidden;
    `};
`;

export const FadeInOut = ({in: inProp, duration, className, children}: VerticalSlideProps) => (
  <Transition in={inProp} timeout={duration} mountOnEnter unmountOnExit>
    {transition => (
      <FadeContent className={className} duration={duration} transition={transition}>
        {children}
      </FadeContent>
    )}
  </Transition>
);

export default FadeInOut;
