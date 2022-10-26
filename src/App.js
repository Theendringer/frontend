import GlobalStyle from "./styles/global"
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css"


const Container = styled.div`
width: 100%;
max-width: 800px;
margin-top: 20px;
display: flex;
flex-direction: column;
align-itens: center;
gap: 10px;
`;

const Title = styled.h2``;


function App() {
  return (
    <>
      <Container>
        <Title>TEste</Title>
      </Container>
      <GlobalStyle/>
    </>
  );
}

export default App;
