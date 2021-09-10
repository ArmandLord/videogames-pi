import { Search } from './Search.style'
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({onChangeGenre, onChangeCE, onChangeRating, onChangeAsDes, handleSubmit, nameF, setNameF,}) => {
    return (
        <Search>
                <form onSubmit={handleSubmit} >
                        <h5>By name</h5>
                        <div style={{display: 'flex', alignItems: "center"}}>
                            <input type="text" value={nameF} onChange={setNameF /*e => setNameF(e.target.value)*/} placeholder='Name:'/>
                            <button type='submit'><FaSearch/></button>

                        </div>
                    </form>
                <section>
                    <h5>By origin</h5>
                    <select onChange={onChangeCE}>
                        <option value="All">All</option>
                        <option value="Created">Creados</option>
                        <option value="Existentes">Existentes</option>
                    </select>
                    </section>      
                <section>
                <h5>By Genres</h5>
                <select onChange={onChangeGenre}>
                    <option value="All">All</option>
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
            </section>
            <section>
                <h5>By Rating</h5>
                <select onChange={onChangeRating}>
                    <option value="TheBestR">The Best Rating</option>
                    <option value="TheWorstR">The Worst Rating</option>
                </select>
            </section>
            <section>
                <h5>A-z / Z-a</h5>
                <select onChange={onChangeAsDes}>
                    <option value="Asc">A-z</option>
                    <option value="Desc">Z-a</option>
                </select>
            </section>
        </Search>
    )
}

export default SearchBar



























