import axios from 'axios';
import Table from 'react-bootstrap/Table';

function BasicExample({users, setUsers, setOnEdit}) {
  const handleEdit = (item) => {
    setOnEdit(item)
  }


  
  
  
  const handleDelete = async (id) =>{
    await axios
    .delete("http://localhost:8800" + id)
    .then(({data}) => {
      const newArray = users.filter((user) => user.id !== id)

      setUsers(newArray)
    })
    .catch(({data}) => toast.error(data))

    setOnEdit(null)
  }





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
                <td><button onClick={() => handleEdit(item)}>Editar</button></td>
                <td><button onClick={() => handleDelete(item.id)}>Excluir</button></td>
            </tr>
        ))}
        
      </tbody>
    </Table>
  );
}

export default BasicExample;