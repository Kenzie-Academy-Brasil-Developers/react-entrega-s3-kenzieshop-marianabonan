import styled from "styled-components";

export const Container = styled.li`
  width: 300px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  margin: 30px;
  padding: 5px;
  text-align: center;
  border: 3px solid transparent;
  :hover {
    border: 3px solid red;
    border-radius: 15px;
  }
  h3 {
    margin-top: 5px;
    background-color: white;
    border-radius: 25px;
  }
  span {
    margin-top: 5px;
    color: gray;
    background-color: white;
    border-radius: 25px;
    font-family: "Nunito", sans-serif;
    font-size: 15px;
    font-weight: 400;
  }
  section {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    font-family: "Nunito", sans-serif;
    font-weight: 500;
    font-size: 20px;
    background-color: white;
    border-radius: 25px;
  }

  button {
    margin-right: 15px;
    font-size: 25px;
    border: none;
    padding: 3px;
    background-color: white;
    border-radius: 25px;
  }
  button:hover {
    color: red;
    cursor: pointer;
  }
`;
