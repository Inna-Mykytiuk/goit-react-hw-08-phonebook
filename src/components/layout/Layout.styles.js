import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 30px;
  max-width: 650px;
  min-height: calc(100vh - 70px);
  box-shadow: 0 0 10px 2px #787878bf;
  margin-left: 100px;
  background-color: #dfcece99;
`;

export const Header = styled.header`
  padding-bottom: 10px;
  margin: 0 auto;
  border-bottom: 1px solid rgb(57, 23, 23);
`;

export const PageContainer = styled.div`
  max-width: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  min-height: 85vh;

  p.TextAuth {
    font-size: 20px;
    padding-top: 15px;
  }

  a {
    color: rgb(57, 23, 23);
    &:hover,
    &:focus {
      color: #fff;
      text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
        rgba(0, 0, 0, 0.5) 1px 1px 1px;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-top: 1px solid rgb(57, 23, 23);
  padding: 10px;

  a {
    color: #fff;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:hover,
    &:focus {
      color: rgb(57, 23, 23);
    }
  }
`;
