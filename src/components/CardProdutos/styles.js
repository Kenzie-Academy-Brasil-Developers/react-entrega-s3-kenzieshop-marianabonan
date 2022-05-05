import styled from "styled-components";

export const Container = styled.li`
  width: 300px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  margin: 30px;
  background-color: white;
  padding: 5px;
  text-align: center;

  h3 {
    margin-top: 5px;
  }
  span {
    margin-top: 5px;
    color: gray;
  }
  section {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    font-size: 20px;
  }

  button {
    margin-right: 15px;
    font-size: 25px;
    border: none;
    padding: 2px;
    background-color: transparent;
  }
  button:hover {
    color: red;
    cursor: pointer;
  }
`;
