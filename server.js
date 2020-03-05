let express = require('express')
let bodyParser = require('body-parser')
let app = express()


app.set("view engine", 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

let Pessoas = mongoose.model('pessoas', {

    nome: String
})

let pessoa = new Pessoas({})


app.get('/', (req, res)=>{

    res.render('index')

})

app.post('/show', (req, res)=> {




    console.log(req.body)


})

app.listen(8081, function () {

    console.log('servidor rodando...')

})