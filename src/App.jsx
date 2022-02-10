import "./App.css";
import styled from "styled-components";
import { BaseCard } from "./components/basecard";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function App() {
  return (
    <AppContainer>
      <BaseCard />
    </AppContainer>
  );
}

export default App;
