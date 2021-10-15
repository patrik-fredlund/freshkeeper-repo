import styled from 'styled-components';

export const NavbarStyles = styled.div`
  display: flex;
  margin: auto;
  max-width: 400px;

  background-color: #0e4462;
  text-decoration: none;

  .menu-list {
    margin: auto;

    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    color: #49beff;
  }

  li {
    color: #49beff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    color: #49beff;
    /* padding: 10px; */
    align-items: center;
    text-decoration: none;
  }
`;
