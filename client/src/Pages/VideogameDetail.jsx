import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getById} from '../redux/actions'
import CardDetail from '../components/CardDetail/CardDetail'
import { useParams, Link } from 'react-router-dom'
import { Container } from '../GlobalStyles/GlobalStyles'
import { FaHome } from 'react-icons/fa'
import { Scroll } from './Home.style'

const VideogameDetail = () => {
    const dispatch = useDispatch()
    const videogame = useSelector(store => store.videogameId)
    // console.log('videogane',videogame[0]);
    let { id } = useParams()
    
    useEffect(() => {
        dispatch(getById(id))
    }, [dispatch])

   
    return (
        <Container>
            {/* <h2>GameZone</h2> */}
            <Scroll style={{background: '#00002B'}}>
                <h2>GameZone</h2>
                <Link style={{color: '#000', textDecoration: 'none', background: '#fff',  width: '100px', textAlign: "center", borderRadius: '1rem'}} to='/Home'><FaHome style={{fontSize: '34px'}}/></Link>
            </Scroll>
            <br/><br/>
            { videogame[0] ? 
                <CardDetail
                name={videogame[0].name}
                image={videogame[0].image}
                rating={videogame[0].rating}
                released={videogame[0].released}
                description={videogame[0].description?.replace(/<[^>]*>?/g, '')}
                
                genres={videogame[0].genres  ? videogame[0].genres.map((el, i) => <li key={i}>{el}</li>) : videogame[0].genres}
                platforms={videogame[0].platforms  ? videogame[0].platforms.map((el, i) => <li key={i}>{el}</li>) : videogame[0].platforms}
                /> : <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/9c3be240991821.57aac5ea9fa15.gif' alt='mario'/>
                <h2 style={{color: '#fff'}}>Loading...</h2>
            </div>}
        </Container>
    )
}

export default VideogameDetail
