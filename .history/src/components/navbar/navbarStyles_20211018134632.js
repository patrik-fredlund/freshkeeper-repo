import styled from 'styled-components';

export const NavbarStyles = styled.div`
  border: 1px solid red;
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: #0e4462;
  padding: 20px;

  z-index: 99;
  margin: auto;
  width: 100%;
  position: fixed;
  bottom: 0;

  .menu-list {
    display: flex;
    list-style-type: none;
    border: 2px solid green;
    flex-direction: row;
  }

  a {
    color: #49beff;

    text-decoration: none;
    border: 1px solid blue;
  }
`;
