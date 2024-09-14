import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    width: 100%;
    height: 100%;

    color: #333;
  }

  body {
    color: #fffef1;
    background-color: #17181d;
    font-family: "Poppins",sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  body, input, button {

  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
  width: 5px; 
}
::-webkit-scrollbar-track {
  background: rgba(241, 241, 241, 0.5);
}
::-webkit-scrollbar-thumb {
  background: rgba(136, 136, 136, 0.5);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(85, 85, 85, 0.5);
}
`;
