import styled from 'styled-components';

export const NavbarStyles = styled.div`
  display: flex;
  margin: auto;
  max-width: 400px;
  justify-content: space-between;
  align-items: center;
  background-color: #0e4462;
  text-decoration: none;

  .menu-list {
    margin: auto;

    list-style-type: none;
    display: flex;
    justify-content: space-between;

    color: #49beff;
  }

  a {
    color: #49beff;
    align-items: center;
    text-decoration: none;
  }
`;
