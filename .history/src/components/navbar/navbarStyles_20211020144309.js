import styled from 'styled-components';

export const NavbarStyles = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0e4462;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  position: fixed;
  bottom: 0;

  .nav-button {
    display: flex;
    list-style-type: none;
    border: 2px solid green;
    width: 100%;
    height: 75px;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
    color: #49beff;
  }
  .Active {
    color: white;
  }
`;
