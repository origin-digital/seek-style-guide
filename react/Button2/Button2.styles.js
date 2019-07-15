import styled, { css } from 'styled-components';
import { tint, shade } from 'polished';

export const Colors = {
  RED_PINK: '#ff373c',
  RED: '#ec0000',
  ORANGE: '#ff8228',
  LIGHT_ORANGE: '#ffb432',
  LIGHT_BLUE: '#d2f0ff',
  GREY: '#505050',
  LIGHT_GREY: '#535353',
  BLUE: '#3f75c6',
  GREEN: '#008906',
  LIGHT_GREEN: '#a5bb48',
  PURPLE: '#c34789',
  GREY4: '#f8f8f8',
  GREY8: '#f1f1f1',
  GREY16: '#e3e3e3',
  GREY24: '#d5d5d5',
  GREY48: '#ababab',
  GREY80: '#737373',
  GREY56: '#232323',
  WHITE: 'white',
  TRANSPARENT: 'transparent'
};

export const FontWeights = {
  REGULAR: 400,
  MEDIUM: 600,
  BOLD: 700
};

export const BREAK_POINTS = {
  /*
    Extra small devices (portrait phones, less than 544px)
    No media query since this is the default at Origin because we are "mobile first"
    */
  Min: {
    /* Small devices (landscape phones, 544px and up) */
    SM: '576px',
    /* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
    MD: '768px',
    /* Large devices (desktops, 992px and up) */
    LG: '992px',
    /* Extra large devices (large desktops, 1200px and up) */
    XL: '1200px'
  },
  Max: {
    SM: '575px',
    MD: '767px',
    LG: '991px',
    XL: '1199px'
  }
};

export const media = {
  SM: (...args) => css`
    @media only screen and (min-width: ${BREAK_POINTS.Min.SM}) {
      ${css(...args)};
    }
  `,

  MD: (...args) => css`
    @media only screen and (min-width: ${BREAK_POINTS.Min.MD}) {
      ${css(...args)};
    }
  `,

  /* Large devices (desktops, 992px and up) */
  LG: (...args) => css`
    @media only screen and (min-width: ${BREAK_POINTS.Min.LG}) {
      ${css(...args)};
    }
  `,
  /* Extra large devices (large desktops, 1200px and up) */
  XL: (...args) => css`
    @media only screen and (min-width: ${BREAK_POINTS.Min.XL}) {
      ${css(...args)};
    }
  `
};

export const ButtonCSSReset = styled.button`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  position: relative;
  // Remove grey highlight
  -webkit-tap-highlight-color: transparent;
  background-color: transparent; // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: none;
  border: 0;
  margin: 0; // Remove the margin in Safari
  border-radius: 0;
  padding: 0; // Remove the padding in Firefox
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  -moz-appearance: none; //Reset
  -webkit-appearance: none;
  text-decoration: none;
  // So we take precedent over the style of a native <a /> element.
  color: inherit;
  &::-moz-focus-inner {
    border-style: none; // Remove Firefox dotted outline.
  }
  &:disabled {
    pointer-events: none;
    // Disable link interactions
    cursor: default;
  }
`;

export const ButtonBaseSkin = styled(ButtonCSSReset)`
  width: ${({ block }) => (block ? '100%' : 'auto')};
  padding: 12px 16px;
  ${media.LG`padding: 12px 24px;`};
  font-size: 14px;
  line-height: 24px;
  ${media.LG`font-size: 16px;`};
  font-weight: ${FontWeights.MEDIUM};
  &:hover:not(:disabled) {
    color: ${Colors.WHITE};
  }
`;

export const ButtonPrimaryBaseSkin = styled(ButtonBaseSkin)`
  color: ${Colors.WHITE};
  box-shadow: none;
  &:disabled {
    color: ${Colors.WHITE};
  }
`;

export const ButtonPrimaryGreySkin = styled(ButtonPrimaryBaseSkin)`
  background-color: ${Colors.GREY};
  &:disabled {
    background-color: ${tint(0.32, Colors.GREY)};
  }
  &:hover:not(:disabled) {
    background-color: ${shade(0.76, Colors.GREY)};
  }
`;
export const ButtonPrimaryReversedBaseSkin = styled(ButtonBaseSkin)`
  background-color: ${Colors.WHITE};
  box-shadow: inset 0px 0px 0px 1px ${Colors.WHITE};
  &:disabled {
    box-shadow: none;
    color: rgba(0, 0, 0, 0.32);
    background-color: rgba(255, 255, 255, 0.32);
  }
`;

export const ButtonPrimaryGreyReverseSkin = styled(
  ButtonPrimaryReversedBaseSkin
)`
  color: ${Colors.GREY};
  &:hover:not(:disabled) {
    box-shadow: inset 0px 0px 0px 1px ${shade(0.76, Colors.GREY)};
    background-color: ${shade(0.76, Colors.GREY)};
  }
`;

export const ButtonPrimaryRedSkin = styled(ButtonPrimaryBaseSkin)`
  background-color: ${Colors.RED};
  &:disabled {
    background-color: ${tint(0.32, Colors.RED)};
  }
  &:hover:not(:disabled) {
    background-color: ${shade(0.76, Colors.RED)};
  }
`;

export const ButtonPrimaryRedReverseSkin = styled(
  ButtonPrimaryReversedBaseSkin
)`
  color: ${Colors.RED};
  &:hover:not(:disabled) {
    box-shadow: inset 0px 0px 0px 1px ${shade(0.76, Colors.RED)};
    background-color: ${shade(0.76, Colors.RED)};
  }
`;

export const ButtonSecondaryBaseSkin = styled(ButtonBaseSkin)`
  background-color: transparent;
  &:hover:not(:disabled) {
    box-shadow: none;
  }
`;

export const ButtonSecondaryGreySkin = styled(ButtonSecondaryBaseSkin)`
  color: ${Colors.GREY};
  box-shadow: inset 0px 0px 0px 1px ${Colors.GREY};
  &:hover:not(:disabled) {
    background-color: ${shade(0.76, Colors.GREY)};
  }
  &:disabled {
    box-shadow: inset 0px 0px 0px 1px rgba(80, 80, 80, 0.16);
    color: rgba(80, 80, 80, 0.4);
  }
`;

export const ButtonSecondaryReversedBaseSkin = styled(ButtonBaseSkin)`
  color: ${Colors.WHITE};
  background-color: transparent;
  box-shadow: inset 0px 0px 0px 1px ${Colors.WHITE};
  &:disabled {
    box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.32);
    color: rgba(255, 255, 255, 0.56);
  }
`;

export const ButtonSecondaryGreyReverseSkin = styled(
  ButtonSecondaryReversedBaseSkin
)`
  &:hover:not(:disabled) {
    box-shadow: inset 0px 0px 0px 1px ${shade(0.76, Colors.GREY)};
    background-color: ${shade(0.76, Colors.GREY)};
  }
`;

export const ButtonSecondaryRedSkin = styled(ButtonSecondaryBaseSkin)`
  color: ${Colors.RED};
  box-shadow: inset 0px 0px 0px 1px ${Colors.RED};
  &:hover:not(:disabled) {
    background-color: ${shade(0.76, Colors.RED)};
  }
  &:disabled {
    box-shadow: inset 0px 0px 0px 1px rgba(236, 0, 0, 0.16);
    color: rgba(236, 0, 0, 0.4);
  }
`;

export const ButtonSecondaryRedReverseSkin = styled(
  ButtonSecondaryReversedBaseSkin
)`
  &:hover:not(:disabled) {
    box-shadow: inset 0px 0px 0px 1px ${shade(0.76, Colors.RED)};
    background-color: ${shade(0.76, Colors.RED)};
  }
`;
