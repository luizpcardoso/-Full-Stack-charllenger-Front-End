import styled from "styled-components";

export const Container = styled.div`

height: 100vh;
width: 100vw;
position: absolute;
top: 0;
z-index: 1;
background-color: #1a1a1a90;
display: flex;
align-items: center;
justify-content: center;
display: none;

section{
  width: 80%;
  height: 30vh;
  background-color: #D9D9D9;
  border-radius: 15px;
  max-width: 350px;

}

form{
  height: 100%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  
}

form input{
  height: 50px;
  width: calc(100% - 10px);
  border: none;
  padding: 0 5px 0 5px;
  margin-bottom: 10px;
  border-radius: 15px;

}

.buttons_form{
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-around;
}

button {
    height: 5em;
    width: 5em;
    border-radius: 100%;
    border: none;
    color: #1A1A1A;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;


  }
  button svg{
    width: 2.5em;
    height: 2.5em;
    
  }

  
`;