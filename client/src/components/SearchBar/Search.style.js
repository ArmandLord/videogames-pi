import styled from 'styled-components'

export const Search = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: center;
    section{
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 200px;
        height: 100%;
        /* background: blue; */
        font-size: 18px;
        color: #ffffff;
        select{
            width: 100px;
            height: 30px;
            border-radius: 4px;
            outline: none;
            
        }
    }
    form{
        font-size: 18px;
        color: #ffffff;
        width: 200px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        /* background: blueviolet; */
        input{
            width: 100px;
            height: 28px;
            border: none;
            outline: none;
            border-bottom-left-radius: 4px;
            border-top-left-radius: 4px;
        }
        button{
            border-bottom-right-radius: 4px;
            border-top-right-radius: 4px;
            height: 30px;
            border: none;
            cursor: pointer;
            background: rgba(255,252,13,0.8323704481792717);
            &:hover{
                background: yellow;
            }
        }
    }
`