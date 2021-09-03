import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { 
    getVideogames, 
    filterVideogamesByGenre,
    filterCreated,
    filterRating,
    filterAsDes
} from '../redux/actions'
import { CardVG, SearchBar, Paginado } from '../components'

const Home = () => {
    const dispatch = useDispatch()
    const videogames = useSelector(store => store.videogames)
    // console.log(videogames);
    const [currentPage, setCurrentPage] = useState(1)
    const [videogamesPerPage, setVideogamesPerPage] = useState(15)
    const [order, setOrder] = useState('');

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

    return (
        <>
            <h1>Henry Videogames</h1>
            <SearchBar 
                onChangeGenre={e => handleFilterGenre(e)}
                onChangeCE={e => handleFilterCreated(e)}
                onChangeRating={e => handleFilterRating(e)}
                onChangeAsDes={e => handleFilterAsDes(e)}
            />
            <button onClick={ () => dispatch(getVideogames()) }>get</button>
            <br/>
            <Paginado 
                videogamesPerPage = {videogamesPerPage}
                allVideogames = {videogames.length + 10} 
                paginado = {paginado}
             />
            {
                currentVideogames ? 
                    currentVideogames.map(el => <CardVG
                        key={el.id}
                        image={el.image}
                        name={el.name}
                        genres={el.genres ? el.genres.map((el, i) => <li key={i}>{el}</li> ) : 'no tiene generos'}
                        rating={el.rating}
                    />) : 
                    <h2>no hay</h2>
            }
        </>
    )
}


export default Home

//para todos los name: https://api.rawg.io/api/games?search=${name}&key=${apiKey}
