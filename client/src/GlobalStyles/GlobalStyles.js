import styled,{ createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: 'Kodchasan', sans-serif;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: -999;
  background: #000;
  
`


