// import styled from 'styled-components';

// export const AppWrap = styled.div`
//   /* display: flex;
//   flex-flow: column; */
//   width: 100%;
//   /* border: 1px solid green; */
//   /* height: 400px; */

//   /* Header */

//   .titleText {
//     font-size: 26px;
//     font-weight: 700;
//     display: flex;
//     justify-content: center;
//     padding-top: 15px;
//     text-align: center;
//   }

//   .infoText {
//     font-size: 10px;
//     font-style: italic;
//     font-weight: 300;
//     display: flex;
//     justify-content: center;
//     text-align: center;
//     line-height: 18px;
//   }

//   hr {
//     border: none;
//     color: #333;
//     margin-left: 20px;
//     margin-right: 20px;
//   }
// `;

import React from 'react';

export default function CenteredContainer({ children }) {
  return (
    <div
      className='centered-container'
      style={{
        marginTop: '8vh',
        marginBottom: '8vh',
        /*         justifyContent: "center",
         */
      }}
    >
      {children}
    </div>
  );
}
