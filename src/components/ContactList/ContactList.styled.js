import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* width: 100%; */
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 30%;
  padding: 0 0 0 20px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
  transition: 0.5s;

  &:hover {
    background-color: #d9dae0;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  p {
    margin: 0;
    padding: 10px 0;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 12px;
  margin: 0px 10px;
  border: none;
  border-radius: 50%;
  background-color: #391717;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  cursor: pointer;
  /* cursor: pointer; */

  transition: all 0.3s ease 0s;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px;

  &:hover,
  &:focus {
    background-color: #fff;
    color: #391717;
  }

  &:active {
    scale: 0.95;
  }
`;
