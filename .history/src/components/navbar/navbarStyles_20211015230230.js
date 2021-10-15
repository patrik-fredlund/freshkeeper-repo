import styled from 'styled-components';

export const NavbarStyles = styled.div`
  border: 1px solid red;
  display: flex;
  /* max-width: 400px; */

  align-items: center;
  background-color: #0e4462;
  padding: 20px;
  position: relative;
  z-index: 99;
  margin: auto;

  .menu-list {
    margin: auto;
    display: flex;
    align-items: center;
    list-style-type: none;

    border: 1px solid green;

    /* padding: 10px 10px; */
  }

  a {
    color: #49beff;
    justify-content: space-between;
    text-decoration: none;
    border: 1px solid blue;
    /* padding: 10px; */
  }
`;
