let art = [
    {
        id: 1,
        name: 'July Sails',
        artist: 'Victor Spahn',
        image: 'http://www.digithall.com/wordpress/wp-content/uploads/2018/07/July-Sails.jpg',
        price: '$500',
        display: 'None'
    },
    {
        id: 2,
        name: 'Fall Earthly Pleasures',
        artist: 'Schaefer Miles',
        image: 'https://parkwestgallery-104d1.kxcdn.com/wp-content/uploads/pwg/wendy-and-kevin-schaefer-miles/wendy-and-kevin-schaefer-miles-fall-earthly-pleasures-378513.jpg',
        price: '$235',
        display: 'Kitchen'
    },
    {
        id: 3,
        name: 'Into the Light',
        artist: 'Schaefer Miles',
        image: 'https://parkwestgallery-104d1.kxcdn.com/wp-content/uploads/pwg/schaefer-miles/schaefer-miles-into-the-light-large-167600.jpg',
        price: '$235',
        display: 'Bedroom'
    }
]

let idNext = 4

const express = require('express')

const app = express()

app.use(express.json())

app.get('/api/art/', (req,res) => {
    res.status(200).send(art)
})

app.get('/api/art/:id', (req,res) => {
    let {id} = req.params

    let singleArt = art.filter((element) => {
        return element.id === +id
    })

    res.status(200).send(singleArt[0])
})

app.post('/api/art/', (req,res) => {
    let {name, artist, display, price, image} = req.body

    let newArt = {
        id: idNext,
        name,
        artist,
        display,
        price,
        image
    }

    art.push(newArt)
    idNext++

    res.status(200).send(art)
})

app.delete('/api/art/:id', (req,res) => {
    let {id} = req.params

    let filteredArt = art.filter((element) => {
        return element.id !== +id
    })

    art = filteredArt

    res.status(200).send(art)
})

// app.put('/api/art/:id', )

app.listen(8080, () => {
    console.log('server running on port 8080')
})