import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;
  border-top: 1px solid black;

  img {
    width: 100px;
    height: 115px;
  }
  h4 {
    margin-left: 5px;
    font-family: "Nunito", sans-serif;
  }
  p {
    margin-left: 8px;
    margin-top: 8px;
    font-family: "Nunito", sans-serif;
  }
  button {
    margin-top: 8px;
    font-size: 20px;
    border: none;
    background-color: transparent;
    margin-left: 18px;
  }
  button:hover {
    color: red;
  }

  @media (min-width: 600px) {
    img {
      width: 200px;
      height: 280px;
    }
    h4 {
      font-size: 25px;
    }
    p {
      margin-top: 15px;
      font-size: 20px;
    }
    button {
      margin-top: 20px;
      font-size: 30px;
    }
  }
`;
