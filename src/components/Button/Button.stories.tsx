import type {StoryObj} from '@storybook/react';
import {ComponentMeta} from '@storybook/react-native';

import Button, {ButtonProps} from './button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: StoryObj<ButtonProps> = {
  args: {
    isPrimary: true,
    label: 'Button',
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    label: 'Button',
  },
};

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Warning: StoryObj<ButtonProps> = {
  args: {
    label: 'Delete now',
    behavior: 'warning',
  },
};

export const Success: StoryObj<ButtonProps> = {
  args: {
    label: 'Delete now',
    behavior: 'success',
  },
};

export const Error: StoryObj<ButtonProps> = {
  args: {
    label: 'Delete now',
    behavior: 'error',
  },
};
