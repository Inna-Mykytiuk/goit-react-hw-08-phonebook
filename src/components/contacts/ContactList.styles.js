import styled from 'styled-components';

export const ContForm = styled.div`
  h1,
  h2 {
    text-align: center;
    font-size: 28px;
    color: #fff;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
  }
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin: 0px;
`;

export const ContactItem = styled.li`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  padding: 0px 0px 0px 20px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
  transition: all 0.5s ease 0s;
`;

export const ContactIcon = styled.div`
  margin-right: 15px;
  border-radius: 4px;
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const ContactText = styled.p`
  font-size: 18px;
`;

export const ContactDelete = styled.button`
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
