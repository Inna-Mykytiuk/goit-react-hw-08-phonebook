import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* width: 100%; */
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  /* width: 100%; */
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
  transition: 0.5s;
  outline: none;

  &:hover {
    background-color: #d9dae0;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  margin: 0px 10px;
  border: none;
  border-radius: 5px;
  background-color: #391717;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;

  &:hover,
  &:focus {
    background-color: #fff;
    color: #391717;
  }

  &:active {
    scale: 0.95;
  }
`;
