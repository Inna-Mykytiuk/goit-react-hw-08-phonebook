import styled from 'styled-components';

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
  width: 30%;
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
