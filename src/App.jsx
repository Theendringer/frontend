import { Component } from "react";
import styled from "styled-components";
import NavBar from './components/navbar'
import GlobalStyles from "./styles/global";
import AdmNovaSala from "./components/admNovaSala"
import AdmTabela from "./components/admTabela"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"
import axios from "axios"
import Tabela from "./components/tabela"
import Buscar from "./components/buscar"
import Carrosel from "./components/carrosel"
import "react-responsive-carousel/lib/styles/carousel.min.css";





function App(){

  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null)


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
        <Carrosel/>
        <br></br>
        <Buscar/>
        <Tabela users={users}/>
        </div>
        <GlobalStyles />
      </>
    );
  }


export default App;
