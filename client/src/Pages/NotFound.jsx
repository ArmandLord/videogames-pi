import { Container } from "../GlobalStyles/GlobalStyles"
import { Link } from 'react-router-dom'


const NotFound = () => {
    return (
        <Container>
            <h2 style={{color: '#fff', fontSize: '85px', margin: '0'}}>404</h2>
            <h3 style={{color: '#fff'}}>Page Not Found</h3>
            <img style={{marginBottom: '40px'}} src="https://mario.wiki.gallery/images/a/ae/Mario_(Defeated)_-_Super_Mario_Sticker.gif" alt="mario 404"/>
            <Link to='/home'><button style={{background: '#fff', border: 'none', borderRadius: '1rem', height: '30px', width: '50px'}}>Home</button> </Link>
        </Container>
    )
}

export default NotFound
