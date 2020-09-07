import React from 'react';
import { Container, Text, Label } from './styles';

export const Card = ({ label, value }) => {

  return (
    <Container>
      <Text>{String(value).padStart(2, '0')}</Text>
      <Label>{label}</Label>
    </Container>
  );
};

export default Card;
