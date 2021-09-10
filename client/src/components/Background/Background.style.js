import styled from 'styled-components'

export const Section = styled.div`
    position: relative;
    width: 96%;
    height: 96%; /*vh*/
    background: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    border-radius: 30px;
    border: ${p => p.p === 'yellow' ? '2px solid  rgba(255,252,13,0.8323704481792717)' : p.p === 'blue' ? '2px solid blue' : p.p === 'green' ? '2px solid green' : '2px solid red'};
    
`

export const RowIcons = styled.div`
   position: relative;
   top: -30%;
   left: -5%;
   
   width: 100%;
   display: flex; 
   padding: 10px 0;
   white-space: nowrap;
   transform: rotate(-30deg); 
   font-size: 150px;
   @media screen and (max-width: 450px){
        font-size: 40px;
        
    }
   
`

export const IconsA = styled.div`
    color: rgba(0, 0, 0, .5);

   animation: animate1 80s linear infinite;
   animation-delay: -40s;
    /*  */
    &:nth-child(2){
        animation: animate2 80s linear infinite;
        animation-delay: 0s;
    }
    
   @keyframes animate1 {
       0% {
        transform: translateX(100%)   
       }
       100% {
        transform: translateX(-100%)
       }
   }
   @keyframes animate2 {
       0% {
        transform: translateX(0%)   
       }
       100% { 
        transform: translateX(-200%)
       }
   }

    @media screen and (max-width: 450px){
        
        color:  rgba(255,252,13,0.3225665266106442);
        
    }
   
    /*  */
   
    .icon{
        
        
        /* text-shadow: 0 0 10px #0f0; */
        
        transition: 1s;
        padding: 0 5px;
        user-select: none;
        cursor: default;

    }

    .icon:hover{
        text-shadow: 0 0 200px  rgba(255,252,13,0.8323704481792717);
        transition: 0s;
        color: rgba(255,252,13,0.8323704481792717);
    }
`
