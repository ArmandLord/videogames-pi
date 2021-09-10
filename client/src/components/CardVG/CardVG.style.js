import styled from 'styled-components'

export const CardC = styled.div`
    background: #00002B;

    width: 400px;
    height: 600px;
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 2.5rem;
    margin-bottom: 15px;
    box-shadow: 2px 2px 10px rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;

    @media screen and (max-width: 450px){
        width: 95%;                
    }
    img{
        border-top-left-radius: 2.5rem;
        border-top-right-radius: 2.5rem;
        height: 65%;
        width: 100%;
        object-fit: cover;
    }
    h3{

        text-align: center;
        color: #fff;
        font-size: 26px;
    }
    h4{
        text-align: center;

    }
    ul{
        background: #b90000;  
        width: 90%;
        height: 30px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    
`