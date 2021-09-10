import { Link } from 'react-router-dom'
import { Background } from '../components'
import { ContainerLanding, BtnStart } from './LandingPage.style'

// const dispatch = useDispatch();
//     useEffect(() => dispatch(getVideogames()), [dispatch])


const LandingPage = () => {
    return (
        <>
            <Background color='yellow' />
            <ContainerLanding> 
                <h1 translate='no'>GameZone</h1>
                <Link translate='no' to='/home'><BtnStart>START GAME</BtnStart></Link> 
            </ContainerLanding>
        </>
    )
}

export default LandingPage
