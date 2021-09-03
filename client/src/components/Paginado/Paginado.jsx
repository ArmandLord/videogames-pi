import React from 'react'

const Paginado = ({videogamesPerPage, allVideogames, paginado}) => {
    const pageNumbers = []
    

    for (let i = 1; i < Math.ceil(allVideogames/videogamesPerPage); i++) {
        pageNumbers.push(i)
    }
    // console.log(pageNumbers);

    return (
        <div style={{border: "2px solid red", height: "auto"}}>
            <ul>
                { pageNumbers &&
                    pageNumbers.map(number => { 
                        return (
                            <li key={number}>
                                <button onClick={() => paginado(number)}>{number}</button>
                            </li>
                        )
                    })
                }        
            </ul>
        </div>
    )
}

export default Paginado
