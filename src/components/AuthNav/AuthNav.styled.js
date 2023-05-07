import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navlink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #000000;
  text-shadow: 2px 2px 5px #ffffff;
  &.active {
    color: #ffffff;
    text-shadow: 2px 2px 5px #000000;
  }
`;
