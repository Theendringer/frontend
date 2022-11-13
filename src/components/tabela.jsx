import Table from 'react-bootstrap/Table';

function BasicExample({users}) {
  


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Nome da Sala</th>
          <th>Codigo</th>
          <th>Descricao</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item,i) =>(
            <tr key={i}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.codigo}</td>
                <td>{item.descricao}</td>
            </tr>
        ))}
        
      </tbody>
    </Table>
  );
}

export default BasicExample;

