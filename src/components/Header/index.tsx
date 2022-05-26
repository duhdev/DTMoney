import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
import { useState } from 'react'
import Modal from 'react-modal'
import React from 'react';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}
export function Header({ onOpenNewTransactionModal }: HeaderProps) {
 

    return (
        <Container>
            <Content>
          <img src={logoImg} alt="dt money" />
          <button type="button" onClick={onOpenNewTransactionModal}>
              Nova Transação
          </button>

          </Content>
        </Container>
    )
}