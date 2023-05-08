import styled from 'styled-components';

export const Form = styled.form`
  padding-top: 20px;

  width: 320px;

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0px;
    margin: 0px 0px 10px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
    transition: all 0.5s ease 0s;
    outline: none;
  }

  button {
    display: inline-block;
    padding: 10px 20px;
    margin: 0px auto;
    border: none;
    border-radius: 5px;
    background-color: rgb(57, 23, 23);
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;

    &:hover,
    &:focus {
      background-color: #fff;
      color: rgb(57, 23, 23);
      cursor: pointer;
    }
  }
`;
