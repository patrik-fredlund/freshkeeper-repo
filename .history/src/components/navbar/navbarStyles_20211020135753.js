import styled from 'styled-components';

export const NavbarStyles = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #0e4462;
  padding-left: 20px;
  padding-right: 20px;

  width: 100%;
  position: fixed;
  bottom: 0;

  .menu-list {
    display: flex;
    list-style-type: none;
    /* border: 2px solid green; */
    width: 100%;

    justify-content: space-between;
  }

  a {
    display: flex;
    padding-top: 10px;
    color: #49beff;
    text-decoration: none;
    /* border: 1px solid blue; */
    justify-content: center;
  }

  .navbarTitles {
    color: #49beff;
    font-size: 10px;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;
