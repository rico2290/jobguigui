const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

const sqlite = require('sqlite')
const dbConnection = sqlite.open('banco.sqlite',{Promise})

app.get('/', (request, response)=>{
    response.render('home', {
        // date: new Date()
    })
})

app.get('/vaga', (request, response)=>{
    response.render('vaga')
})

const init = async()=>{
    const db = await dbConnection
    const categoria = 'Engineering Team'
    await db.run('create table if not exists categorias (id INTEGER PRIMARY KEY, categoria TEXT);')
    await db.run(`insert into categorias(categoria) values('${categoria}')`)
}
init()

app.listen(3000, (err)=>{
    if(err){
        console.log('Não foi possivel iniciar o servidor')
    }
    else{
        console.log('Servidor do JobGui iniciado rodando...')
    }
})