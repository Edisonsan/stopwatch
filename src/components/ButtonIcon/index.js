import React from 'react';
import { Button } from './styles';

export const ButtonIcon = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default ButtonIcon;
