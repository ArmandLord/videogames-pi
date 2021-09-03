import React from 'react'

const CardVG = ({image, name, genres, rating}) => {
    return (
        <div style={{border: "2px solid red", marginBottom: '10px'}}>
            <img src={image} alt={name} style={{width: '100px'}}/>
            <h3>{name}</h3>
            <ul>{genres}</ul>
            <h5>{rating}</h5>
        </div>
    )
}

export default CardVG
