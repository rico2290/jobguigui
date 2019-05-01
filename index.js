const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (request, response)=>{
    //console.log(new Date())
    response.render('home')
})

app.listen(3000, (err)=>{
    if(err){
        console.log('Não foi possivel iniciar o servidor')
    }
    else{
        console.log('Servidor do JobGui iniciado rodando...')
    }
})

