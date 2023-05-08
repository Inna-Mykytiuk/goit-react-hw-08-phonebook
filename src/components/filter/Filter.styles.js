import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0px;
  margin: 0px 0px 10px;

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
`;
