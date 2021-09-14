import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { postVideogame, getGenres } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../GlobalStyles/GlobalStyles'
import { Form, Nav } from './VideogameCreate.style'
import { FaHome } from 'react-icons/fa'

function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = 'Required';
    } 
     if (!input.description) {
        errors.description = 'Required';
    }
      if (!input.releaseDate) {
        errors.releaseDate = 'Required';
    }
     if (!input.rating) {
        errors.rating = 'Required';
    }
    // if(!input.name || !input.description || !input.released || !input.rating) {
    //     errors = 'Required Field'
    // }
    return errors
}

const mock = [
    'PC',
    'PlayStation 5',
    'Xbox One',
    'PlayStation 4',
    'Xbox Series S/X',
    'Nintendo Switch',
    'iOS',
    'Android',
    'Nintendo 3DS',
    'Nintendo DS',
    'Nintendo DSi',
    'macOS',
    'Linux',
    'Xbox 360',
    'Xbox',
    'PlayStation 3',
    'PlayStation 2',
    'PlayStation',
    'PS Vita',
    'PSP',
    'Wii U',
    'Wii',
    'GameCube',
    'Nintendo 64',
    'Game Boy Advance',
    'Game Boy Color',
    'Game Boy',
    'SNES',
    'NES',
    'Classic Macintosh',
    'Apple II',
    'Commodore / Amiga',
    'Atari 7800',
    'Atari 5200',
    'Atari 2600',
    'Atari Flashback',
    'Atari 8-bit',
    'Atari ST',
    'Atari Lynx',
    'Atari XEGS',
    'Genesis',
    'SEGA Saturn',
    'SEGA CD',
    'SEGA 32X',
    'SEGA Master System',
    'Dreamcast',
    '3DO',
    'Jaguar',
    'Game Gear',
    'Neo Geo'
]

const VideogameCreate = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector((state) => state.genres)
    // console.log(genres);
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: "",
        description: "",
        releaseDate: "",
        rating: "",
        platforms: [],
        image: "",
        genres: []
    })
    const [create, setCreate] = useState(true)
    // console.log(input);
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }
    function handleCheck(e) {
        if (e.target.checked) {
            setInput({
                ...input,
                rating: parseInt( e.target.value, 10 )
            })
        } 
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }
    function handleSelect(e) {
        setInput({
            ...input,
            genres: [...input.genres, e.target.value]
        })
    }
    function handleDelete(g) {
        setInput({
            ...input,
            genres: input.genres.filter(genre => genre !== g)
        })
    }
    
    function handleSelectP(e) { //platforms
        setInput({
            ...input,
            platforms: [...input.platforms, e.target.value]
        })
    }
    function handleDeleteP(p) { //platforms
        setInput({
            ...input,
            platforms: input.platforms.filter(plat => plat !== p)
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        // console.log(input)
        dispatch(postVideogame(input))
        // alert("Videogame successfully created");
        setCreate(!create)
        setInput({
            name: "",
            description: "",
            releaseDate: "",
            rating: "",
            platforms: [],
            image: "",
            genres: []
        })
        setTimeout(() => history.push('/home'), 1000)
    }

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch]);

    return (
        <Container>
            <Nav>
            <Link style={{color: '#000', textDecoration: 'none', background: '#fff',  width: '100px', textAlign: "center", borderRadius: '1rem'}} to='/Home'><FaHome style={{fontSize: '34px'}}/></Link>
            </Nav>
            <Form>
                <form onSubmit={(e) => handleSubmit(e)}>
                    {
                        create ? <h2>Create your Videogame</h2> : <h2 style={{color: "yellow"}}>¡¡Successfully Created!!</h2>
                    }
                    
                    
                         
                            <label>Name:</label>
                            <input
                                type="text"
                                placeholder="Name: "
                                value={input.name}
                                name="name"
                                onChange={(e) => handleChange(e)}
                            />
                            {errors.name && (
                                <h5 style={{color: 'red'}}>{errors.name}</h5>
                            )}
                        
                         
                            <label >Platforms:</label>
                            <select onChange={(e) => handleSelectP(e)}>
                                <option>Platforms:</option>
                                {
                                    mock.map((el, i) => <option key={i} value={el}>{el}</option>)
                                }
                            </select>
                            <div style={{display: "flex", width: '100%', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center'}} >
                                {
                                input.platforms.map((el, i) => 
                                <div  key={i}>
                                    <button   onClick={() => handleDeleteP(el)}>x</button>
                                    <p>{el}</p>
                                </div>)
                                }
                            </div>
                            
                        
                       
                            <label >Rating:</label>
                            
                            <label className='label'>
                                <input
                                className='input'
                                    type="checkbox"
                                    value={"1"}
                                    name="1"
                                    onChange={(e) => handleCheck(e)}
                                />☆</label>
                            <label className='label'>
                                <input
                                className='input'
                                    type="checkbox"
                                    value="2"
                                    name="2"
                                    onChange={(e) => handleCheck(e)}
                                />☆☆</label>
                            <label className='label'>
                                <input
                                className='input'
                                    type="checkbox"
                                    value="3"
                                    name="3"
                                    onChange={(e) => handleCheck(e)}
                                />☆☆☆</label>
                            <label className='label'>
                                <input
                                className='input'
                                    type="checkbox"
                                    value="4"
                                    name="4"
                                    onChange={(e) => handleCheck(e)}
                                />☆☆☆☆</label>
                            <label className='label'>
                                <input
                                className='input'
                                    type="checkbox"
                                    value="5"
                                    name="5"
                                    onChange={(e) => handleCheck(e)}
                                />☆☆☆☆☆</label>
                            
                            {errors.rating && (
                                <h5  style={{color: 'red'}}>{errors.rating}</h5>
                            )}
                         
                         
                            <label >Genres:</label>
                            <select  onChange={(e) => handleSelect(e)}>
                                <option>Genres:</option>
                                {genres.map((g) => (
                                    <option key={g.id} value={g.nameGenre}>{g.nameGenre}</option>
                                ))}
                            </select>
                            <div style={{display: "flex", width: '100%', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center'}} >
                                {input.genres.map(g =>
                                <div  key={g}>
                                    <button   onClick={() => handleDelete(g)}>x</button>
                                    <p>{g}</p>
                                </div>
                            )}
                            </div>
                            
                        
                       
                            <label >Release Date:</label>
                            <input
                            placeholder="Enter the Release Date..."
                                type="text"
                                
                                value={input.releaseDate}
                                name="releaseDate"
                                onChange={(e) => handleChange(e)}
                            />
                            {errors.releaseDate && (
                                <h5  style={{color: 'red'}}>{errors.releaseDate}</h5>
                            )}
                        
                            <label >Image:</label>
                            <input
                            placeholder="Enter the Image URL..."
                            
                                type="text"
                                value={input.image}
                                name="image"
                                onChange={(e) => handleChange(e)}
                            />
                        
                    
                    
                            <label >Description:</label>
                            <textarea
                            placeholder="Enter a Description..."
                                type="text"
                                
                                value={input.description}
                                name="description"
                                onChange={(e) => handleChange(e)}
                            />
                            {errors.description && (
                                <h5 style={{color: 'red'}}>{errors.description}</h5>
                            )}
                       
                    <button  type="submit">Create</button>
                </form>
            </Form>
        </Container>
    )
}


export default VideogameCreate