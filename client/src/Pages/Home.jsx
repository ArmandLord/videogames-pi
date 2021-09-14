import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { 
    getVideogames, 
    filterVideogamesByGenre,
    filterCreated,
    filterRating,
    filterAsDes,
    getByName
} from '../redux/actions'
import { CardVG, SearchBar, Paginado, Title } from '../components'
import { Link } from 'react-router-dom'
import { Container } from '../GlobalStyles/GlobalStyles'
import { NavBar, ContainerGames, GamesCien, Scroll, Scroll2, ContainerHome } from './Home.style'
import { FiRefreshCw } from 'react-icons/fi'
import { IoMdCreate } from 'react-icons/io'
import { FaArrowUp } from 'react-icons/fa'




const Home = () => {
    const dispatch = useDispatch()
    const videogames = useSelector(store => store.videogames)
    // console.log(videogames);
    const [currentPage, setCurrentPage] = useState(1)
    const [videogamesPerPage, setVideogamesPerPage] = useState(15)
    const [order, setOrder] = useState('');
    const [nameF, setNameF] = useState('')

    const indexOfLastVideogame = currentPage * videogamesPerPage
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage
    const currentVideogames = videogames.slice(indexOfFirstVideogame, indexOfLastVideogame)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getVideogames())
    }, [dispatch])

    function handleFilterGenre(e) {
        dispatch(filterVideogamesByGenre(e.target.value))
        setCurrentPage(1)
        // setCurrent(1) para que se regrese
    }
    function handleFilterCreated(e) { //
        dispatch(filterCreated(e.target.value))
        setCurrentPage(1)
    }
    function handleFilterRating(e) {
        dispatch(filterRating(e.target.value));
        setCurrentPage(1)
        setOrder(e.target.value)
    }
    function handleFilterAsDes(e) {
        dispatch(filterAsDes(e.target.value));
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getByName(nameF.toLocaleLowerCase()))
        // console.log(nameF);
        setCurrentPage(1)
        setNameF('')
    }
     return (
        <Container>
            <ContainerHome>

                <Scroll id='top'>
                    <h2  style={{height: '60px'}}>GameZone</h2>  
                    <Title/> 
                    <div style={{width:'180px', height: '60px', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <Link to='/videogame/create'><button><IoMdCreate style={{fontSize: '34px'}}/></button></Link>
                        <small style={{fontSize: '10px'}}>Create</small>
                    </div>
                </Scroll>
                <Scroll2>
                    <button onClick={ () => dispatch(getVideogames()) }>Refresh <FiRefreshCw /></button>
                </Scroll2>
                <NavBar>
                        <SearchBar
                            handleSubmit={handleSubmit}
                            nameF={nameF}
                            setNameF={e => setNameF(e.target.value)} 
                            onChangeGenre={e => handleFilterGenre(e)}
                            onChangeCE={e => handleFilterCreated(e)}
                            onChangeRating={e => handleFilterRating(e)}
                            onChangeAsDes={e => handleFilterAsDes(e)}
                        />
                </NavBar>
                <ContainerGames>
                    <Paginado 
                        videogamesPerPage = {videogamesPerPage}
                        allVideogames = {videogames.length + 10} 
                        paginado = {paginado}
                    />
                    <GamesCien>
                        {
                            currentVideogames.length > 0 ? 
                                currentVideogames.map(el => <CardVG
                                    key={el.id}
                                    image={el.image}
                                    name={el.name}
                                    genres={el.genres.length > 0 ? el.genres.map((el, i) => <li style={{listStyle: 'none'}} key={i}>{el}</li> ) : <li style={{listStyle: 'none'}}>Sin generos</li>}
                                    id={el.id}
                                />) : 
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/9c3be240991821.57aac5ea9fa15.gif' alt='mario'/>
                                    <h2 style={{color: '#fff'}}>Loading...</h2>
                                </div>
                        }
                            
                        {
                            currentVideogames.length > 0 ?
                            <a className='a' href="#top"><button><FaArrowUp/></button></a> : ''
                        }
                                
                                
                       

                        
                    </GamesCien>
                </ContainerGames>
            </ContainerHome>
        </Container>
    )
}


export default Home

//para todos los name: https://api.rawg.io/api/games?search=${name}&key=${apiKey}
