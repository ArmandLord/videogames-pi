    import styled from 'styled-components'

    export const ContainerHome = styled.div`
        width: 100%;
        height: 100%;
        /* background: pink; */
        display: flex;
        flex-direction: column;
        align-items: center;
    ` 

    export const NavBar = styled.div`
         width: 100%;
        
        height: 14%;
        display: flex;
        justify-content: center; 
        align-items: flex-start;
        
    
        /* flex-wrap: nowrap;
    
        overflow-x: scroll; */
     

        /* background: rebeccapurple; */
        @media screen and (max-width: 450px){
       
        width: 400px;
        height:130px;
        overflow-x: scroll;
        display: flex;
        flex-wrap: no-wrap;
        justify-content: normal;
        }
    `

    export const ContainerGames = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    /* background: gray; */
    `

    export const GamesCien = styled.div`
        background: #000;
        
        height: auto;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        /* flex-direction: column; */
        @media screen and (max-width: 450px){
            flex-direction: column;
        }
        .a{
            text-decoration: none;
            /* background: rebeccapurple; */
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            button{
                height: 40px;
                width: 40px;
                border-radius: 50%;
                color: #000;
                font-size: 24px;
                background: #ffffff;
                border: none;
                margin-bottom: 20px;
                cursor: pointer;
            }
        }
    `

    export const Scroll = styled.div`
        height: 10%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        color: #fff;
        box-shadow: 0 1px 10px 0 rgba(250, 250, 250, 0.8);
        
        h2{
            font-size: 44px;
            @media screen and (max-width: 450px){
            font-size: 34px;
            width: 230px;
            /* background: red; */
            text-align: center;
        }
        }
        button{
            width: 34px;
            height: 34px;
            border-radius: 50%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            border: none;
            cursor: pointer;
            margin-bottom: 5px;
            background: rgba(255,252,13,0.8323704481792717);
            &:hover{
                background: yellow;
            }
        }
        /* background: red; */
    `
    export const Scroll2 = styled.div`
        height: 5%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        color: #fff;
        
        button{
            color: #fff;
            /* font-size: 40px; */
            border: none;
            border-radius: 6px;
            /* border: 2px solid rgba(250, 250, 250, 0.5); */
            background: #00002B;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 150px;
            height: 40px;
            font-size: 15px;
            cursor: pointer;
                transition: .3s;
            &:hover{
                transition: .3s;
                transform: scale(1.09);
            }
            @media screen and (max-width: 450px){
                width: 120px;
                height: 30px;
            }
        }
        /* border-bottom: 2px solid rgba(255, 255, 255, 0.8); */

        background: #b90000;
    `