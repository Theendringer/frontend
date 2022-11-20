import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HeaderAndFooterExample() {
  return (
    <Card className="text-center">
      <Card.Header>Projeto Unisalas</Card.Header>
      <Card.Body>
        <Card.Text>
          Desenvolvido por: Alexander, Carlos, Gabriella, Gustavo, Gustavo, Lucas e Marllon
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted"><Button href="/adm" variant="primary">Admin</Button></Card.Footer>
    </Card>
  );
}

export default HeaderAndFooterExample;