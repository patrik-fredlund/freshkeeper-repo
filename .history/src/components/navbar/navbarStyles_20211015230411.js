import styled from 'styled-components';

export const NavbarStyles = styled.div`
  border: 1px solid red;
  display: flex;
  /* max-width: 400px; */
  justify-content: space-between;
  align-items: center;
  background-color: #0e4462;
  padding: 20px;
  position: relative;
  z-index: 99;
  margin: auto;

  .menu-list {
    /* margin: auto; */
    display: flex;
    align-items: center;
    list-style-type: none;
    width: 100%;
    border: 1px solid green;
    max-width: 400px;
    /* padding: 10px 10px; */
  }

  a {
    color: #49beff;

    text-decoration: none;
    border: 1px solid blue;
    /* padding: 10px; */
  }
`;
