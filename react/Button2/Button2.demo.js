import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Button2, HeartIcon, StarIcon } from 'seek-style-guide/react';
import * as sketch from './Button2.sketch';
import styles from './Button2.less';
import classnames from 'classnames';

export default {
  route: '/button2',
  title: 'Origin Digital Button',
  category: 'Form',
  component: Button2,
  sketch,
  initialProps: {
    children: 'Hello world',
    color: 'red'
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        /*         {
          label: 'Hover',
          transformProps: ({ className, ...props }) => ({
            ...props,
            className: classnames(className, styles.rootHover)
          })
        },
        {
          label: 'Active',
          transformProps: ({ className, ...props }) => ({
            ...props,
            className: classnames(className, styles.rootActive)
          })
        },
        {
          label: 'Focus',
          transformProps: ({ className, ...props }) => ({
            ...props,
            className: classnames(className, styles.rootFocus)
          })
        }, */
        {
          label: 'Block',
          transformProps: props => ({
            ...props,
            block: true
          })
        },
        {
          label: 'Reverse Color',
          transformProps: props => ({
            ...props,
            reverseColor: true
          })
        }
      ]
    },
    {
      label: 'Component',
      type: 'radio',
      states: [
        {
          label: 'As Button',
          transformProps: props => ({
            ...props,
            component: 'button'
          })
        },
        {
          label: 'As Link',
          transformProps: props => ({
            ...props,
            component: 'a',
            href: '#'
          })
        },
        {
          label: 'As Div',
          transformProps: props => ({
            ...props,
            component: 'div'
          })
        }
      ]
    },
    {
      label: 'Colour',
      type: 'radio',
      states: [
        {
          label: 'Red',
          transformProps: props => ({
            ...props,
            color: 'red'
          })
        },
        {
          label: 'Grey',
          transformProps: props => ({
            ...props,
            color: 'grey'
          })
        }
      ]
    },
    {
      label: 'Kind',
      type: 'radio',
      states: [
        {
          label: 'Primary',
          transformProps: props => ({
            ...props,
            kind: 'primary'
          })
        },
        {
          label: 'Secondary',
          transformProps: props => ({
            ...props,
            kind: 'secondary'
          })
        }
      ]
    }
    /*     {
      label: 'Icon',
      type: 'radio',
      states: [
        {
          label: 'No Icon',
          transformProps: props => props
        },
        {
          label: 'Heart Icon',
          transformProps: props => ({
            ...props,
            children: (
              <span>
                <HeartIcon filled={true} />
                &nbsp;Click here
              </span>
            )
          })
        },
        {
          label: 'Star Icon',
          transformProps: props => ({
            ...props,
            children: (
              <span>
                <StarIcon filled={true} />
                &nbsp;Click here
              </span>
            )
          })
        }
      ]
    } */
  ]
};
