import styled from 'styled-components';

export const NavbarStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  position: fixed;
  height: 65px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #033b5b;
  color: #49beff;
  padding: 12px 16px 14px 18px;

  .nav-button {
    font-size: 12px;
    margin: 0px auto;
    bottom: 0px;
    display: flex;
    justify-content: center;
    border: 1px solid red;
  }
  a {
    text-decoration: none;
    color: #49beff;
  }
  .Active {
    color: white;
  }
`;
