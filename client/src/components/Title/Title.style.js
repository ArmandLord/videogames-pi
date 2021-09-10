import styled from 'styled-components'

export const Uli = styled.ul`

transition: .5s;
display: flex;
padding: 0;
color: #000;
list-style: none;

/* background: red; */
    .li1{
        cursor: pointer;
        font-size: 54px;
        &:hover{
            color: yellow;
               text-shadow: 0 0 200px  rgba(255,252,13,0.8323704481792717);
        }
    }
    .li2{
        cursor: pointer;
        font-size: 54px;
        &:hover{
            color: yellow;
               text-shadow: 0 0 200px  rgba(255,252,13,0.8323704481792717);
        }
    }
    .li3{
        cursor: pointer;
        font-size: 54px;
        &:hover{
            color: yellow;
               text-shadow: 0 0 200px  rgba(255,252,13,0.8323704481792717);
        }
    }
    .li4{
        cursor: pointer;
        font-size: 54px;
        &:hover{
            color: yellow;
               text-shadow: 0 0 200px  rgba(255,252,13,0.8323704481792717);
        }
    }
    .li5{
        cursor: pointer;
        font-size: 54px;
        &:hover{
            color: yellow;
               text-shadow: 0 0 200px  rgba(255,252,13,0.8323704481792717);
        }      
    }
    @media screen and (max-width: 450px){
        display: none;
    }
`