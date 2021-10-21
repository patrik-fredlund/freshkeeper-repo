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

  .addItemContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'inter';
  }

  .mainNumber {
    font-weight: 700;
    font-size: 12px;
    line-height: 22px;
    background-color: #49beff;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    text-align: center;
    margin-right: 300px;
    margin-bottom: -10px;
    /* position: absolute; */
  }

  .mainTitle {
    font-weight: 700;
    font-size: 1.1rem;
    text-align: center;
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
    margin-top: 20px;
  }
  .addStorageContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'inter';
    margin-top: 20px;
  }
  .chooseDateContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'inter';
    margin-top: 20px;
  }
`;
