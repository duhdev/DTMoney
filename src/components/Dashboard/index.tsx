import { Summary } from "../Summary";
import { TransactionsTrable } from "../TransactionsTrable";
import { Container } from "./styles";
import React from 'react';

export function Dashboard() {
    return (
        <Container>
            <Summary/>
            <TransactionsTrable/>
        </Container>
    );
}