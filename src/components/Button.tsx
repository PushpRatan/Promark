import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className={`flex h-11 w-full items-center justify-center rounded-full bg-primary ${className}`}>
      <Text className="text-dark-font text-base font-medium">{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
