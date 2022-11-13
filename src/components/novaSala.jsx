import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome da Sala</Form.Label>
        <Form.Control type="text" placeholder="Insira o nome da sala" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Codigo</Form.Label>
        <Form.Control type="text" placeholder="Insira o codigo da sala" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descricao</Form.Label>
        <Form.Control type="text" placeholder="Insira a descricao da sala" />
      </Form.Group>
      <Button variant="success" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default BasicExample;