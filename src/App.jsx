import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Home from './Home.jsx'
import Adm from './Adm.jsx'
import Login from './Login.jsx'





function App() {

  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null)


  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800")
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      console.log("deu merda")
    }
  }

  useEffect(() => {
    getUsers()
  }, [setUsers])


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/adm' element={<Adm/>}/>
        <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
