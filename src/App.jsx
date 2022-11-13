import { Component } from "react";
import styled from "styled-components";
import NavBar from './components/navbar'
import GlobalStyles from "./styles/global";
import NovaSala from "./components/novaSala"
import Tabela from "./components/tabela"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"
import axios from "axios"




function App(){

  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState([null])


  const getUsers = async () => {
    try{
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
        <NavBar/>
        <div className="container">
        <NovaSala onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
        <br></br>
        <Tabela users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
        </div>
        <GlobalStyles />
      </>
    );
  }


export default App;
