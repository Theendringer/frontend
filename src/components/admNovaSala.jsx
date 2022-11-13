/*import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import axios from "axios";
import { Button } from 'react-bootstrap';




const novasala = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.codigo.value = onEdit.value;
      user.descricao.value = onEdit.descricao;

    }
  }, [onEdit]);


  const handleSubmit = async (e) => {
    e.proventDefault();

    const user = ref.current

    if (
      !user.nome.value ||
      !user.codigo.value ||
      !user.descricao.value
    ) {
      return console.log("Preenche todos os campos")
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: user.nome.value,
          codigo: user.codigo.value,
          descricao: user.descricao.value,
        })
        .then(({ data }) => console.log(data))
        .catch(({ data }) => console.log(data))
    } else {
      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          codigo: user.coodigo.value,
          descricao: user.descricao.value,
        })
        .then(({ data }) => console.log(data))
        .catch(({ data }) => console.log(data))
    }
    user.nome.value = "";
    user.codigo.value = "";
    user.descricao.value = "";

    setOnEdit(null);
    getUsers()
  }



  const FormContainer = styled.form`
display: flex;
align-itens: flex-end;
gap: 10px;
flex-wrap: wrap;
background-color: #fff;
padding: 20px;
box-shadow 0px 0px 5px #ccc;
border-radius: 5px;
`;

  const InputArea = styled.div`
display: flex;
flex-direction: column
`;

  const Input = styled.input`
width: 120px;
padding: 0 10px;
border: 1px solid #bbb;
height: 40px;
`;

  const Label = styled.label``;

  const Button = styled.button`
padding: 10px;
cursor: pointer;
border-radius: 5px;
background-color : #2c73d2;
color: white;
height: 42px;
`;

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>

      <InputArea>
        <Label>Codigo</Label>
        <Input name="codigo" />
      </InputArea>

      <InputArea>
        <Label><Descricao></Descricao></Label>
        <Input name="descricao" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  )




  /*function BasicExample() {
    return (
      <Form ref={ref} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome da Sala</Form.Label>
          <Form.Control name="nome" type="text" placeholder="Insira o nome da sala" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Codigo</Form.Label>
          <Form.Control name="codigo" type="text" placeholder="Insira o codigo da sala" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Descricao</Form.Label>
          <Form.Control name="descricao" type="text" placeholder="Insira a descricao da sala" />
        </Form.Group>
        <Button variant="success" type="submit">
          Enviar
        </Button>
      </Form>
    );
    }

}
export default Form;
*/

import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.codigo.value = onEdit.codigo;
      user.descricao.value = onEdit.descricao;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.codigo.value ||
      !user.descricao.value 
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: user.nome.value,
          codigo: user.codigo.value,
          descricao: user.descricao.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          codigo: user.codigo.value,
          descricao: user.descricao.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";
    user.codigo.value = "";
    user.descricao.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome"/>
      </InputArea>
      <InputArea>
        <Label>Codigo</Label>
        <Input name="codigo" type="text" />
      </InputArea>
      <InputArea>
        <Label>Descricao</Label>
        <Input name="descricao" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;

//<AdmNovaSala onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>