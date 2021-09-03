

const SearchBar = ({onChangeGenre, onChangeCE, onChangeRating, onChangeAsDes}) => {
    return (
        <>
            <h5>Filtrar por Género</h5>
            <select onChange={onChangeGenre}>
                <option value="All">Todos</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Arcade">Arcade</option>
                <option value="Board Games">Board Games</option>
                <option value="Card">Card</option>
                <option value="Casual">Casual</option>
                <option value="Educational">Educational</option>
                <option value="Family">Family</option>
                <option value="Fighting">Fighting</option>
                <option value="Indie">Indie</option>
                <option value="Massively Multiplayer">Massively Multiplayer</option>
                <option value="Platformer">Platformer</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Racing">Racing</option>
                <option value="RPG">RPG</option>
                <option value="Shooter">Shooter</option>
                <option value="Simulation">Simulation</option>
                <option value="Sports">Sports</option>
                <option value="Strategy">Strategy</option>
            </select>
            <br/>
            <h5>Filtrar por Creados/Existentes</h5>
            <select onChange={onChangeCE}>
                <option value="All">Todos</option>
                <option value="Created">Creados</option>
                <option value="Existentes">Existentes</option>
            </select>
            <br/>
            <h5>Filtrar por Rating</h5>
            <select onChange={onChangeRating}>
                <option value="TheBestR">The Best Rating</option>
                <option value="TheWorstR">The Worst Rating</option>
            </select>
            <br/>
            <h5>Ordenar ascendete o descendente</h5>
            <select onChange={onChangeAsDes}>
                <option value="Asc">A-z</option>
                <option value="Desc">Z-a</option>
            </select>
            
        </>
    )
}

export default SearchBar































