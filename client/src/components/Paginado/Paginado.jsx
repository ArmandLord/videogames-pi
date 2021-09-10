import { PaginadoS } from './Paginado.style'

const Paginado = ({videogamesPerPage, allVideogames, paginado}) => {
    const pageNumbers = []
    

    for (let i = 1; i < Math.ceil(allVideogames/videogamesPerPage); i++) {
        pageNumbers.push(i)
    }
    // console.log(pageNumbers);

    return (
        <>
            <PaginadoS>
                { pageNumbers &&
                    pageNumbers.map(number => { 
                        return (
                            <li key={number}>
                                <button onClick={() => paginado(number)}>{number}</button>
                            </li>
                        )
                    })
                }        
            </PaginadoS>
        </>
    )
}

export default Paginado
