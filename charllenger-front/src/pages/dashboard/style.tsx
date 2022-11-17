import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color:#1A1A1A ;
  display: flex;
  align-items: center;
  flex-direction: column;

  .user_infos{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 30%;
    justify-content: center;
    
  }
 
  .user_infos img {
    height: auto;
    width: 40%;
    max-width: 150px;
  }

  .user_infos p {
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    height: 1em;
    margin: 0.5em;
  }

  .transactions_list{
    background-color:#D9D9D9;
    height:50% ;
    width: 90%;
    max-width: 800px;
    border-radius: 15px;
  }

  .transaction_filter {
    height: 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .transactions_list ul{
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    height: 70%;
    
    
  }

  .transaction_filter button {
    border-radius: 15px;
    border: none;
    height: 35px;
    width: 30%;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: #ffffff;
  }
  .transaction_filter_in{
    background-color: #237210;
  }

  .transaction_filter_out{
    background-color: #7B1010;
  }
  .pay_options{
    display: flex;
    height: 15%;
    width: 100%;
    max-width: 800px;
    align-items: center;
    justify-content: space-around;
  }

  .pay_options button {
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
  .pay_options button svg{
    width: 2.5em;
    height: 2.5em;
    
  }

  @media (min-width: 600px) {








  }






  
`