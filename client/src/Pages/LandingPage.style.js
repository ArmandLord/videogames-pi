import styled from 'styled-components'

export const ContainerLanding = styled.div`
    height: 100px;
    width: 100px;
    top: calc(50vh - 100px);
    left: calc(50vw - 50px);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    /* background: blue; */

    h1{
        font-size: 100px;
        color: #fff;
        font-weight: bold;
    @media screen and (max-width: 450px){
        font-size: 60px;
        
    }
        
    }

`

export const BtnStart = styled.button`
    width: 200px;
  font-weight: bold;
  color: black;
  
  box-sizing: border-box;
  &::before,
  &::after {
    box-sizing: border-box;
  }
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  font-size: inherit;
  & {
    padding: 1.25em 2em;
    background: #faed9c;
    border: 2px solid #e0b802;
    border-radius: 0.75em;
    transform-style: preserve-3d;
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      background 150ms cubic-bezier(0, 0, 0.58, 1);
    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #f5c802;
      border-radius: inherit;
      box-shadow: 0 0 0 2px #e0b802, 0 0.625em 0 0 #faed9c;
      transform: translate3d(0, 0.75em, -1em);
      transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
        box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    }
    &:hover {
      background: #faed9c;
      transform: translate(0, 0.25em);
      &::before {
        box-shadow: 0 0 0 2px #e0b802, 0 0.5em 0 0 #faed9c;
        transform: translate3d(0, 0.5em, -1em);
      }
    }
    &:active {
      background: #faed9c;
      transform: translate(0em, 0.75em);
      &::before {
        box-shadow: 0 0 0 2px #e0b802, 0 0 #faed9c;
        transform: translate3d(0, 0, -1em);
      }
    }
  }
`;
