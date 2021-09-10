import styled from 'styled-components'

export const CardDet = styled.div`
    width: 80%;
    min-width: 1000px;
    height: 80%;
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 2.5rem;
    margin-bottom: 15px;
    box-shadow: 4px 4px 10px rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    background: #ffffff;
    
    @media screen and (max-width: 450px){
        min-width: 380px;
        /* width: 60%; */
        height: 100%;
        /* justify-content: center; */
    }       
            
`

export const Section1 = styled.section`
    width: 100%;
    height: 90%;
    display: flex;
    display: ${p => p.click ? 'none' : 'visble'};
    img{
        height: 100%;
        width: 50%; 
        object-fit: cover;  
        border-top-left-radius: 2.5rem;  
        /* border-right: 2px solid black; */
    
    }
    .div{   
            height: 100%;
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;

            /* display: none; */

            h2{
                font-size: 45px;
                width: 100%;
                background: #000;
                color: #ffffff;
                text-align: center;
            }
            h4{
                font-size: 25px;
                /* margin:0; */
            }
            h5{
                font-size: 20px;
                    
                    background: #000;
                    color: #ffffff;
                    width: 200px;
                    height: 30px;
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
            ul{
                width: 90%;
                list-style: none;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                flex-wrap: wrap;
                font-size: 20px;
                li{
                    margin-bottom: 20px;
                    background: #000;
                    color: #ffffff;
                    width: 200px;
                    height: 30px;
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }   
    @media screen and (max-width: 450px){
        flex-direction: column;
        /* justify-content: center; */
        /* align-items: center; */
        /* background: red; */
        width: 100%;
        height: 100%;
        /* background: red; */
        img{
            height: 50%;
            width: 100%; 
            object-fit: cover;  
            border-top-left-radius: 2.5rem;  
            border-top-right-radius: 2.5rem;  
            /* border-right: 2px solid black; */
    
        }
        .div{  
            height: 50%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            h2{
                margin: 0; 
                padding: 0;
                font-size: 20px;
                width: 100%;
                background: #000;
                color: #ffffff;
                text-align: center;
            }
            h4{
                font-size: 12px;
                margin:0;
                margin-top: 4px;
            }
            h5{
                font-size: 10px;
                    
                    background: #000;
                    color: #ffffff;
                    width: 65px;
                    height: 20px;
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
            ul{
                width: 90%;
                list-style: none;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                flex-wrap: wrap;
                font-size: 8px;
                li{
                    /* margin-bottom: 2px; */   
                    background: #000;
                    color: #ffffff;
                    width: 65px;
                    height: 20px;
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                
            }   
        }
    }
`

export const Section2 = styled.section`
    background: #00002B;
    width: 100%;
    height: ${p => p.click ? '100%' : '10%'}; 
    border-bottom-left-radius: 2.5rem;
    border-bottom-right-radius: 2.5rem;
    border-top-right-radius: ${p => p.click ? '2.5rem' : 0};
    border-top-left-radius: ${p => p.click ? '2.5rem' : 0};
    display: flex;
    
    align-items: center;
    flex-direction: column;


    button{ 
        height: 50px;
        width: 50px;
        border-radius: 50%;
        border: none;
        margin-top: 18px;
    }
    small{
        color: #fff;
        /* font-size: 12px; */
    }
    @media screen and (max-width: 450px){
        
        button{ 
            
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: none;
            margin-top: 5px;

        }
        h2{
            font-size: 20px;
        }
        h5{
            font-size: 15px;

        }

    }
`
