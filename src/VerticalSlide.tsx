import * as React from 'react';
import {Transition} from 'react-transition-group';
import styled, {css, keyframes} from 'react-emotion';
import {TransitionStatus} from 'react-transition-group/Transition';

export type VerticalSlideProps = {
  in: boolean;
  maxHeight: number;
  duration: number;
  children: React.ReactNode;
  className?: string;
  alsoFade?: boolean;
};

const slideIn = (maxHeight: number) => keyframes`
  0% {max-height: 0px;}
  100% {max-height: ${maxHeight}px;}
`;

const slideOut = (maxHeight: number) => keyframes`
  0% {max-height: ${maxHeight}px;}
  100% {max-height: 0px;}
`;

const fadeIn = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

const fadeOut = keyframes`
  0% {opacity: 1;}
  100% {opacity: 0;}
`;

interface SlideStyleProps {
  transition: TransitionStatus;
  maxHeight: number;
  duration: number;
  alsoFade?: boolean;
}

const VerticalSlideContent = styled('div')<SlideStyleProps>`
  ${props =>
    props.transition === 'entering' &&
    css`
      animation: ${slideIn(props.maxHeight)} ${props.duration}ms ease-in-out 0ms 1 normal both
        ${props.alsoFade && `, ${fadeIn} ${props.duration}ms ease-in-out 0ms 1 normal both`};
      overflow: hidden;
    `};

  ${props =>
    props.transition === 'exiting' &&
    css`
      animation: ${slideOut(props.maxHeight)} ${props.duration}ms ease-in-out 0ms 1 normal both
        ${props.alsoFade && `, ${fadeOut} ${props.duration}ms ease-in-out 0ms 1 normal both`};
      overflow: hidden;
    `};
`;

/**
 * The content passed as children will be conditionally rendered based on the `in` prop.
 * If the `in` prop goes from true to false, it will animate the component away and
 * then unmount it after the duration amount ends
 */
export const VerticalSlide = ({
  in: inProp,
  maxHeight,
  duration,
  className,
  alsoFade = false,
  children,
}: VerticalSlideProps) => (
  <Transition in={inProp} timeout={duration} mountOnEnter unmountOnExit>
    {transition => (
      <VerticalSlideContent
        className={className}
        maxHeight={maxHeight}
        duration={duration}
        transition={transition}
        alsoFade={alsoFade}
      >
        {children}
      </VerticalSlideContent>
    )}
  </Transition>
);

export default VerticalSlide;
