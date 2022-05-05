import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100px;
  border-bottom: 3px solid red;
  .title {
    margin-left: 15px;
  }
  .icons_header {
    font-size: 25px;
    margin-left: 25px;
    border: none;
    background-color: transparent;
  }
  .icons_header:hover {
    cursor: pointer;
    color: red;
  }

  @media (max-width: 425px) {
    .icons_header {
      margin-left: 5px;
    }
  }
`;
