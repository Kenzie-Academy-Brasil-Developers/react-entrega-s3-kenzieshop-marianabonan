import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-self: center;
  }
  @media (max-width: 635px) {
    section {
      flex-direction: column;
    }
  }
`;
