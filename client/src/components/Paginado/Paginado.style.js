import styled from 'styled-components'

export const PaginadoS = styled.ul`
    display: flex;
    align-content: center;
    justify-content: center;
    height: auto;
    margin-bottom: 10px;
    width: 90%;
    /* background: yellow; */
    li{
        list-style: none;
        
        /* margin-right: 5px; */
        button{
            
            background: #ffffff;
            margin-right: 3px;
            border: none;
            border-radius: 2px;
            width: 40px;
            height: 40px;
            font-size: 18px;
            &:hover{
                background: grey;
                color: #ffffff;
            }
            &:focus{
                background: grey;
                color: #ffffff;
            }
            @media screen and (max-width: 450px){
                width: 30px;
                height: 30px;
                font-size: 15px;
            }
        }
    }
`