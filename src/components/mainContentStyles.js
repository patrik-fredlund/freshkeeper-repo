import styled from 'styled-components';

export const AddItemStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;700&family=Pacifico&display=swap');

  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 5px 10px;
  margin: auto;
  max-width: 400px;

  hr {
    border: none;
    color: #333;
    margin-left: 20px;
    margin-right: 20px;
  }

  .addItemContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'inter';
  }

  .mainNumber {
    font-weight: 700;
    font-size: 12px;
    background-color: #49beff;
    line-height: 22px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    text-align: center;
    margin-right: 300px;
    margin-bottom: 0;
    /* position: absolute; */
  }

  .mainTitle {
    font-weight: 700;
    font-size: 1.1rem;
    text-align: center;
    margin-top: -20px;
  }

  .searchBar {
    font-weight: 300;
    font-size: 12px;
    border: 1px solid #49beff;
    background: rgba(17, 169, 255, 0.12);
    width: 250px;
    height: 41px;
    border-radius: 5px;
    padding: 0 20px;
  }

  .addQuantityContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'inter';
  }
  .addStorageContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'inter';
  }
  .chooseDateContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'inter';
  }

  .counterContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .minusBtn {
    font-weight: 700;
    border: 1px solid #49beff;
    line-height: 42px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    text-align: center;
    margin-right: 20px;
  }
  .plusBtn {
    font-weight: 700;
    border: 1px solid #49beff;
    line-height: 42px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    text-align: center;
    margin-left: 20px;
  }
  .counter {
    font-weight: 700;
    font-size: 26px;
    border: 1px solid #49beff;
    line-height: 62px;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    text-align: center;
  }

  .storages {
    display: flex;
    flex-direction: row;
    font-size: 12px;
  }

  .fridge {
    border: 1px solid #49beff;
    line-height: 62px;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    text-align: center;
  }
  .fridge {
    border: 1px solid #49beff;
    line-height: 62px;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    text-align: center;
    /* margin-left: 20px; */
  }
  .freezer {
    border: 1px solid #49beff;
    line-height: 62px;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    text-align: center;
    /* margin-left: 20px; */
  }
  .pantry {
    border: 1px solid #49beff;
    line-height: 62px;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    text-align: center;
    /* margin-left: 20px; */
  }
  .custom {
    border: 1px solid #49beff;
    line-height: 62px;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    text-align: center;
    /* margin-left: 20px; */
  }

  .summary {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;
    height: 65px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
  .summary-item {
    margin: auto;
  }
  .summary-title {
    font-weight: bold;
    font-size: 14px;
    line-height: 30px;
  }

  button {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    margin: 5px auto;
    padding: 14px 12px 14px 12px;
    width: 300px;
    height: 40px;
    border: #ffffff;
    background: #49beff;
    color: #ffffff;
    border-radius: 4px;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
`;
