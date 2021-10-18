import styled from 'styled-components';

export const NavbarStyles = styled.div`
  border: 1px solid red;
  display: flex;
  max-width: 400px;
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
    align-items: center;
    list-style-type: none;

    border: 1px solid green;
    justify-content: space-between;
    /* max-width: 400px; */
  }

  a {
    color: #49beff;

    text-decoration: none;
    border: 1px solid blue;
    /* padding: 10px; */
  }
`;
