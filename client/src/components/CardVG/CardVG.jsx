import {Link} from 'react-router-dom'
import { CardC  } from './CardVG.style'

const CardVG = ({image, name, genres, id}) => {
    return (
        <CardC>
            <img src={image} alt={name}/>
            <h3><Link to={`/videogame/${id}`} style={{textDecoration: 'none', color: 'white'}}>{name}</Link></h3>
            <h4 style={{margin: '0'}}>Genres:</h4>
            <ul>{genres}</ul>
        </CardC>
    )
}

export default CardVG
