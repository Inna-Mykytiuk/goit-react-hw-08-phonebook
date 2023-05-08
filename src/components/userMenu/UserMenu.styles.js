import styled from 'styled-components';

export const UserTitle = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  p {
    font-size: 22px;
  }

  button {
    display: inline-block;
    padding: 5px 10px;
    margin: 0px 10px;
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
