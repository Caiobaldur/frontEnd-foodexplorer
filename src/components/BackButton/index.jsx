import React from 'react';
import { Container } from "./styles";
import leftArrow from '../../assets/left_arrw.svg';

export function BackButton() {
  return (
    <Container type="button">
      <img src={leftArrow} alt="Seta para esquerda" />
      voltar
    </Container>
  );
}