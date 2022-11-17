import styled from "styled-components";

export const Container = styled.li`
  height: 50px;
  width: calc(90% - 10px);
  list-style: none;
  padding: 0;
  background-color:#ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  margin: 10px 0 0 0;
  justify-content: space-between;
  padding: 0 5px 0 5px;
  
  .date{
    display: none;
  }
`;