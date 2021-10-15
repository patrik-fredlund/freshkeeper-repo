import styled from 'styled-components';

export const NavbarStyles = styled.div`
  border: 1px solid red;
  display: flex;
  max-width: 400px;
  align-items: center;
  background-color: #0e4462;
  justify-content: center;
  padding: 20px;

  .menu-list {
    margin: auto;
    list-style-type: none;
    display: flex;
    border: 1px solid green;
    /* padding: 10px 10px; */
  }

  a {
    color: #49beff;
    align-items: center;
    text-decoration: none;
    border: 1px solid blue;
    /* padding: 10px 10px; */
    justify-content: center;
  }
`;
