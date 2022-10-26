import { Component } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/global";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Hello world</h1>
        <GlobalStyles />
      </Container>
    );
  }
}

export default App;
