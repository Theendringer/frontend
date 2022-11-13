import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { FaTrash, FaEdit } from "react-icons/fa";

function BasicExample({users, setUsers, setOnEdit}) {
  const handleEdit = (item) => {
    setOnEdit(item)
  }


  

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => console.log(data));

    setOnEdit(null);
  };





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
                <td>
                <FaEdit onClick={() => handleEdit(item)} />
                </td>
                <td>
                <FaTrash onClick={() => handleDelete(item.id)} />
                </td>
            </tr>
        ))}
        
      </tbody>
    </Table>
  );
}

export default BasicExample;



// <Tabela setOnEdit={setOnEdit} users={users} setUsers={setUsers}/>