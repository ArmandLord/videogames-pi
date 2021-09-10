import { CardDet, Section1, Section2 } from './CardDetail.style'
import { FcRating } from 'react-icons/fc'
import { IoGameController } from 'react-icons/io5'
import { BiUpArrow, BiDownArrow } from 'react-icons/bi'
import { useState } from 'react'



const CardDetail = ({
    image,
    name,
    genres,
    description,
    rating,
    platforms,
    released,
}) => {
    const [click, setClick] = useState(false)
    return (
        <CardDet>
            <Section1 className='section1' click={click}>
                <img src={image} alt={name}/>
                <div className='div'>
                    <h2>{name}&nbsp;<IoGameController style={{color: '#fff', fontSize: '30px'}}/></h2>
                    <h4>Platforms:</h4>
                    <ul>{platforms}</ul>
                    <h4>Genres:</h4>
                    <ul>{genres}</ul>
                    <div style={{display:"flex", alignItems: 'center', justifyContent: 'space-evenly', width: '100%' }}>
                        <h4>Rating:</h4>
                        <h5>{rating}&nbsp;<FcRating/></h5>
                        <h4>Relase date:</h4>
                        <h5>{released}</h5> 
                    </div>
                </div>
            </Section1>
            <Section2 click={click} className='section2'>
                <button onClick={() => setClick(!click)}>{click ? <BiDownArrow  style={{fontSize: '25px'}}/> : <BiUpArrow style={{fontSize: '25px'}}/>}</button>
                <small>Description</small>
                {
                    click ? 
                    <div style={{width: '80%', height: '80%', fontSize: '30px'}}>
                        <h2 style={{color: '#fff'}}>Description</h2>
                        <h5 style={{color: '#fff'}}>{description}</h5> 
                    </div> : ''
                }
            </Section2>
        </CardDet>
    )
}

export default CardDetail
