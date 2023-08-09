import React, {FC, PropsWithChildren, useMemo} from 'react';
import {Pressable, Text} from 'react-native';

import {ButtonBehavior, ButtonSize} from './Button.type';

const getSizeClasses = (size: ButtonSize) => {
  switch (size) {
    case 'small': {
      return 'btn-small';
    }
    case 'large': {
      return 'btn-large';
    }
    default: {
      return 'btn-medium';
    }
  }
};

const getBehaviorClasses = (behavior: ButtonBehavior) => {
  switch (behavior) {
    case 'error': {
      return 'btn-danger';
    }
    case 'warning': {
      return 'btn-warning';
    }
    case 'success': {
      return 'btn-success';
    }
    default: {
      return '';
    }
  }
};

const getModeClasses = (isPrimary: boolean) =>
  isPrimary ? 'btn-primary' : 'btn-secondary';

const BASE_BUTTON_CLASSES = 'btn';

export type ButtonProps = {
  isPrimary?: boolean;
  size?: ButtonSize;
  label: string;
  behavior?: ButtonBehavior;
} & PropsWithChildren;

//https://www.material-tailwind.com/docs/react/button
const Button: FC<ButtonProps> = ({
  isPrimary = false,
  size = 'medium',
  label,
  children,
  behavior,
  ...props
}) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(isPrimary);
    const sizeClass = getSizeClasses(size);
    const behaviorClass = getBehaviorClasses(behavior);

    return [modeClass, sizeClass, behaviorClass].join(' ');
  }, [behavior, isPrimary, size]);

  return (
    <Pressable
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      {...props}>
      {children}
      <Text className="font-black">{label}</Text>
    </Pressable>
  );
};

export default Button;
