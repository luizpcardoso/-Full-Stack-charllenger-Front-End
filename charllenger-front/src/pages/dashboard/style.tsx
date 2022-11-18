import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  flex-direction: column;

  .user_infos {
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
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    height: 1em;
    margin: 0.5em;
  }

  .pay_options {
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
    color: #1a1a1a;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pay_options button svg {
    width: 2.5em;
    height: 2.5em;
  }

  @media (min-width: 600px) {
  }
`;
