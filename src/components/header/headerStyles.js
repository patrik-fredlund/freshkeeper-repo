import styled from 'styled-components';

export const HeaderWrap = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;700&family=Pacifico&display=swap');

  width: 100%;

  .logoContainer {
    font-family: 'pacifico';
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #0e4462;
    color: #49beff;
    padding: 10px 0;
  }

  .titleText {
    font-size: 26px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    padding-top: 15px;
    text-align: center;
  }

  .infoText {
    font-size: 10px;
    font-style: italic;
    font-weight: 300;
    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 18px;
  }

  hr {
    border: none;
    color: #333;
    margin-left: 20px;
    margin-right: 20px;
  }
`;
