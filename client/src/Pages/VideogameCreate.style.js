import styled from 'styled-components'

export const Nav = styled.div`
    width: 100%;
    height: 5%;
    background: #b90000;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const Form = styled.div`
    /* background: red; */
    width: 100%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form{
        /* background: blue;    */
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        width: 100%;
        height: 100%;
        color: #fff;
        text-align: center;
        button{
            margin: 20px 0;
            width: 60%;
            height: 30px;
            font-size: 17px;
            background: rgba(255,252,13,0.8323704481792717);
            border: none;

            &:hover{
                background: yellow;
            }
        }
        label{
            margin-top: 20px;
            width: 60%;
            height: 30px;
            /* background: yellow; */
        }
         .label{ /* Ratig */
            margin-top: 5px;
            width: 60%;
            height: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            /* background: blue; */
            .input{
                width: auto;
                height: 15px; 
            border: none;
                
            }
        }
        input{
            outline: none;
            width: 60%;
            height: 30px;
            border: none;
        }
        select{
            outline: none;
            width: 60%;
            height: 30px;
            border: none;
        }
        textarea{
            outline: none;  
            border: none;
            width: 60%;
            min-height: 50px;
        }
    }
`