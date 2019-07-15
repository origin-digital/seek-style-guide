// @flow
import styles from './Button2.less';
import React from 'react';
import { Component } from 'react';
import classnames from 'classnames';
import capitalize from 'lodash/capitalize';
import {
  ButtonPrimaryGreySkin,
  ButtonPrimaryGreyReverseSkin,
  ButtonPrimaryRedSkin,
  ButtonPrimaryRedReverseSkin,
  ButtonSecondaryGreySkin,
  ButtonSecondaryGreyReverseSkin,
  ButtonSecondaryRedSkin,
  ButtonSecondaryRedReverseSkin
} from './Button2.styles';

type Props = {
  color: 'pink' | 'blue' | 'gray' | 'transparent' | 'white',
  children: React$Node,
  className?: string,
  component?: string | Function,
  ghost?: boolean,
  loading?: boolean,
  fullWidth?: boolean,
  color?: string,
  kind?: string,
  reverseColor?: boolean
};

const skinMap = new Map();
skinMap.set('primarygrey', ButtonPrimaryGreySkin);
skinMap.set('primarygreyreverse', ButtonPrimaryGreyReverseSkin);
skinMap.set('primaryred', ButtonPrimaryRedSkin);
skinMap.set('primaryredreverse', ButtonPrimaryRedReverseSkin);
skinMap.set('secondarygrey', ButtonSecondaryGreySkin);
skinMap.set('secondarygreyreverse', ButtonSecondaryGreyReverseSkin);
skinMap.set('secondaryred', ButtonSecondaryRedSkin);
skinMap.set('secondaryredreverse', ButtonSecondaryRedReverseSkin);

export const getSkin = ({ kind, color, reverseColor }) => {
  const key = kind + color + (reverseColor ? 'reverse' : '');
  const map = skinMap.get(key);
  return map;
};

export default class Button2 extends Component<Props> {
  static displayName = 'Button2';

  static defaultProps = {
    className: '',
    ghost: false,
    loading: false,
    fullWidth: false,
    component: 'button'
  };

  button: ?HTMLElement;
  props: Props;

  render() {
    const {
      color = 'red',
      kind = 'primary',
      reverseColor = false,
      loading,
      children,
      component: as = 'button',
      ...restProps
    } = this.props;

    const combinedProps = {
      /*     className: classnames(styles.root, className, {
        [styles.loading]: loading,
        [styles.fullWidth]: fullWidth,
        [styles.root_isGhost]: ghost && color !== 'transparent',
        [styles[`root_is${capitalize(color)}`]]: color
      }), */
      as,
      ...restProps
    };
    const ButtonElement = getSkin({ kind, color, reverseColor });
    return React.createElement(ButtonElement, combinedProps, children);
  }
}
