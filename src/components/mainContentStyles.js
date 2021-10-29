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

  //---------Add Item Page--------------//

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

  .chooseDateContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'inter';
  }

  //-----------choose quantity styles-----------//

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
    color: black;
    background-color: white;
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
    color: black;
    background-color: white;
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

  .select-input {
    position: fixed;

    border-radius: 8px;
    background: #49beff;
    border: 2px solid #49beff;
    box-sizing: border-box;
    font-size: 10px;
    height: 20px;
    width: 50px;
    margin-left: 200px;
  }

  //---------------choose storage styles------------------//

  .addStorageContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;
    height: 65px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

  .storages {
    font-size: 12px;

    margin: auto 5px;
    width: 68px;
    height: 68px;
    padding-top: 8px;
    border-radius: 100vw;
    border: 2px solid #49beff;
    text-align: center;
    cursor: pointer;
  }
  input:active + label {
    background-color: #49beff;
  }
  .storages input[type='radio'] {
    display: none;
  }

  //---------choose date styles-------------//

  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    display: flex;
    margin: auto;
    width: 276px;
    height: 41px;
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    display: flex;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 300;
    text-align: center;
    font-size: 18px;
    line-height: 20px;
    margin: auto;
    display: flex;
    background: rgba(17, 169, 255, 0.12);
    border: 1px solid #49beff;
    border-radius: 5px;
    width: 276px;
    height: 41px;
    cursor: pointer;
  }
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    display: flex;
    border: none;
    cursor: pointer;
  }
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    cursor: pointer;
    text-align: center;
  }

  //------------------summary styles---------------------//

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
    display: flex;
    justify-content: space-around;
    font-weight: bold;
    font-size: 14px;
    line-height: 30px;
  }

  .summary-subtitel {
    color: #49beff;
    text-align: center;
    font-weight: 700;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px auto;
    padding: 14px 12px 14px 12px;
    width: 300px;
    height: 50px;
    border: #ffffff;
    background: #49beff;
    color: #ffffff;
    border-radius: 4px;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
  }
`;

export const StoragePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  text-decoration: none;

  .allStoredItems {
    background-color: #49beff;
    width: 414px;
    height: 45px;
    left: 0px;
    top: 216px;
  }
  .Fridge {
    border: 1px solid black;
    background-color: #a5c9ff;
    width: 414px;
    height: 45px;
    left: 0px;
    top: 216px;
    padding: 12px 0px 12px 14px;
  }
  .Freezer {
    border: 1px solid black;
    background-color: #73abff;
    width: 414px;
    height: 45px;
    left: 0px;
    top: 216px;
    padding: 12px 0px 12px 14px;
  }

  .Pantry {
    border: 1px solid black;
    background-color: #ffe1d5;
    width: 414px;
    height: 45px;
    left: 0px;
    top: 216px;
    padding: 12px 0px 12px 14px;
  }

  .item-info {
    display: flex;
    flex-direction: row;
    color: green;
    border: 1px solid green;
    align-items: center;
    background-color: #d5e4fb;
  }
  .line {
    width: 1px;
    height: 30px;
    background-color: black;
    margin: 2px 10px;
  }

  p {
    display: flex;
    color: red;
    text-decoration: none;
    align-items: center;
    margin: 0 8px;
    padding: 12px 0px 12px 5px;
  }

  li {
    list-style-type: none;
  }
`;
