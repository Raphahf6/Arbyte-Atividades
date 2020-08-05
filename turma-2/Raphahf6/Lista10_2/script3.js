const axios = require("axios")
const rs = require('readline-sync')

const search = rs.question('Digite algo para procurar na api deezer: ')

axios({
    "method": "GET",
    "url": "https://deezerdevs-deezer.p.rapidapi.com/search",
    "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "9a9062be6amsh9dae5fe30f2d336p1f366cjsnce46fa664368",
        "useQueryString": true
    }, "params": {
        "q": search
    }
})
    .then((response) => {
        let data = response.data
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })