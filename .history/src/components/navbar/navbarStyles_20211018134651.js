import styled from 'styled-components';

export const NavbarStyles = styled.div`
  border: 1px solid red;
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: #0e4462;
  padding: 20px;

  width: 100%;

  bottom: 0;

  .menu-list {
    display: flex;
    list-style-type: none;
    border: 2px solid green;
  }

  a {
    color: #49beff;

    text-decoration: none;
    border: 1px solid blue;
  }
`;
