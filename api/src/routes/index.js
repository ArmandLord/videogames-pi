const { Router } = require('express');
const axios = require('axios');
require('dotenv').config();
// const Videogame = require('../models/Videogame');
const { API_KEY } = process.env
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Videogame, Genre } = require('../db');
const db = require('../db');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// let aux = 1
//Aquí me traigo la data de la API
const getApiInfo = async () => {

    const apiURL = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
    const apiURL2 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`)
    const apiURL3 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3`)
    const apiURL4 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=4`)
    const apiURL5 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=5`)
    
    let totalGames = apiURL.data.results.concat(apiURL2.data.results, apiURL3.data.results, apiURL4.data.results, apiURL5.data.results)
   
    // console.log(totalGames.length);
    const apiInfo = await totalGames.map(el => { 
        return {
            // aux: aux++,
            id: el.id,
            name: el.name,
            released: el.released,
            image: el.background_image,
            rating: el.rating,
            platforms: el.platforms.map(el => el.platform.name),
            genres: el.genres.map(el => el.name)
        }
    })
    return apiInfo
}

//Aquí la data de la db
const getDbInfo = async () => {
    return await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ['nameGenre'],
            through: {
                attributes: []
            },  
        }
    })
}

const getVgNameApi = async (game) => {
    const apiUrlName = await axios.get(`https://api.rawg.io/api/games?search=${game}&key=${API_KEY}`)    
    let vName = await apiUrlName.data.results.map(el => { 
        return {
            // aux: aux++,
            id: el.id,
            name: el.name,
            released: el.released,
            image: el.background_image,
            rating: el.rating,
            platforms: el.platforms.map(el => el.platform.name),
            genres: el.genres.map(el => el.name)
        }
    })
    return vName.slice(0, 15) //solo 15
}
const getNamedGames = async (name) => {
    const apiSearch = await getVgNameApi(name);
    const dbInfo = await getDbInfo();
    const auxArr = await dbInfo.map(el => {
        return {
            id: el.dataValues.id,
            name: el.dataValues.name,
            description: el.dataValues.description,
            releaseDate: el.dataValues.releaseDate,
            rating: el.dataValues.rating,
            platforms: el.dataValues.platforms,
            image: el.dataValues.image,
            genres: el.dataValues.genres.map(el => el.nameGenre),
            createdInDb: el.dataValues.createdInDb
        }
    })
    // console.log(apiSearch);
    // console.log(auxArr);
    const allInfo = apiSearch.concat(auxArr);
    return allInfo;
}


//Concatenar ambos // el bueno
const getAllVideogames = async () => {
    const apiInfo = await getApiInfo()
    const dbInfo = await getDbInfo()
    //hacer el map 👆🏻
    // console.log(dbInfo[0].dataValues);
    const arr = await dbInfo.map(el => {
        return {
            id: el.dataValues.id,
            name: el.dataValues.name,
            description: el.dataValues.description,
            releaseDate: el.dataValues.releaseDate,
            rating: el.dataValues.rating,
            platforms: el.dataValues.platforms,
            image: el.dataValues.image,
            genres: el.dataValues.genres.map(el => el.nameGenre),
            createdInDb: el.dataValues.createdInDb
        }
    })
    const totalInfo = apiInfo.concat(arr)   
    return totalInfo    
}


//obtener por id
const getIdVideogame = async (id) => {
    const apiURL = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    
    let obj = {
        id: apiURL.data.id,
        name: apiURL.data.name,
        released: apiURL.data.released,
        image: apiURL.data.background_image,
        rating: apiURL.data.rating,
        description: apiURL.data.description,
        platforms: apiURL.data.platforms.map(el => el.platform.name),
        genres: apiURL.data.genres.map(el => el.name)
    }
    // console.log(obj);
    return obj
}

//obtener los generos 
const getGenre = async () => {
    const apiURL = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    const genres = await apiURL.data.results.map(el => el.name)
    return genres
}

//Crear la ruta: en esta parte podemos unificar las dos GET
//simplemente destructurando qery

router.get('/videogames', async (req, res) => {
    const  name  = req.query.name
    let nameGa = await getNamedGames(name)
    if(name){
        let cosa = await nameGa.filter(v => v.name.toLowerCase().includes(name.toLowerCase()))
        if (cosa.length >= 1) return res.status(200).send(cosa);
            res.status(404).send('No existe el videojuego buscado, por favor revise el nombre');
    } else {
        let totalVideogames = await getAllVideogames()
        res.status(200).send(totalVideogames)  
        
    }
})


router.get('/videogame/:id', async (req, res) => {
    const { id } = req.params
    try {
        let videogameId = await getIdVideogame(id)
        

        if(id) {
            res.status(200).send(videogameId)
        } else {
            res.status(404).send('no se encuentra ningun vdeojuego con ese nombre')
        }
    } catch (error) {
        res.status(404).send('no se encuentra ningun vdeojuego con ese nombre')
    }    
})

router.get('/genres', async (req, res) => {
    let genres = await getGenre()
    genres.map(el => {
        Genre.findOrCreate({
            where: { nameGenre: el }
        })
    })
    const allGenres = await Genre.findAll()
    res.send(allGenres)
})



// router.post('/videogame', async (req, res) => {
//     let { name, description, releaseDate, genre, rating, platforms } = req.body
    
//     let newGame = await Videogame.create({
//         name,
//         description,
//         releaseDate,
//         rating,
//         platforms,
//         // image,
//     })

//     let genreDb = await Genre.findAll({
//         where: { nameGenre: genre } 
//     })

//     newGame.addGenre(genreDb)
//     res.status(200).send('creado con exito')

// })

router.post('/videogame', async (req, res) => {
    let {
        name,
        description,
        releaseDate,
        rating,
        platforms,
        genres,
        image

    } = req.body;

    let createdVGame = await Videogame.create({
        name,
        description,
        releaseDate,
        rating,
        platforms,
        image
    });



    let genreDb = await Genre.findAll({ where: {nameGenre: genres } }); //name de tabla genre
    createdVGame.addGenre(genreDb);
    // console.log(createdVGame, 'genreeee',genreDb);
    res.status(200).send('Videogame created successfully!');
})

module.exports = router;
