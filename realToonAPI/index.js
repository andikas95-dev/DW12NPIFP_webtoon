//express modul
const express = require('express')
//init bodyparser
const bodyParser = require('body-parser')
require('express-group-routes')

//use express in app variable
const app = express()
//define the server port
const port = 5000

//allow this app to receive incoming json request
app.use(bodyParser.json())

// const UserController = require('./controllers/users')

//create the homepage route
//app dari express app variable
//req for request & res for respon
// app.get('/', (req, res) => {
//     res.send('Hello Express')
// })
// app.get('/todos', (req, res) => {
//     res.send(todos)
// })

//controllers
const AuthController = require('./controllers/auth')
const GenresController = require('./controllers/genres')
const ComicsController = require('./controllers/comics')
const DetailComicsController = require('./controllers/detailcomics')
const DetailEpisodesController = require('./controllers/detailepisodes')
const MyFavoritesController = require('./controllers/myfavorites')
const MyWebtoonsController = require('./controllers/mywebtoon')

//middleware
const { authenticated } = require('./middleware')

app.group('/api/v1', (router) => {
    //API login & register
    router.post('/login', AuthController.login) //for Log In
    router.post('/register', AuthController.register) //for Sign Up

    //API genre
    router.get('/genres', GenresController.index)
    router.get('/genre/:id', GenresController.show)
    router.post('/genre', GenresController.store)
    router.patch('/genre/:id', GenresController.update)
    router.delete('/genre/:id', GenresController.delete)

    //API comics
    //SELAIN SEARCH JUGA MENAMPILKAN SEMUA DATA KOMIK
    router.get('/comics', ComicsController.index)


    //MENAMPILKAN KOMIK MILIK/BUATAN KITA SAJA
    router.get('/user/:id/comics', authenticated, MyWebtoonsController.showMyWebtoon)
    //MEMBUAT KOMIK MILIK SENDIRI
    router.post('/user/:id/comic', authenticated, MyWebtoonsController.storeMyWebtoon)
    // GET SEMUA DETAIL KOMIK KITA SENDIRI
    //Jadi pertanyaan kenapa detail webtoon nya malah keluar semua??
    router.get('/user/:id_user/comic/:id_comic/episodes', authenticated, MyWebtoonsController.showDetailMyWebtoon)

    // router.get('/comic/:id', ComicsController.show)
    // router.post('/comic', ComicsController.store)
    // router.patch('/comic/:id', ComicsController.update)
    // router.delete('/comic/:id', ComicsController.delete)

    //API Detail comics
    router.get('/comic/:id/episodes', DetailComicsController.showWebtoon)

    //API Detail Episodes
    router.get('/comic/:id_webtoon/episode/:id_episode', DetailEpisodesController.showEpisodes)

    //API My Favorite
    // router.get('/favorite/:id', MyFavoritesController.getMyFavorite)
    router.get('/favorite/:id', authenticated, MyFavoritesController.getMyFavorite)


    //user API
    // router.get('/users', UserController.index)
    // router.get('/user/:id', UserController.show)
    // router.post('/user', UserController.store)
    // router.patch('/user/:id', UserController.update)
    // router.delete('/user/:id', UserController.delete)
})

app.listen(port, () => console.log(`Listening On Port ${port}!`))