/***********************************************************************************
 * Objetivo: Criar uma API para realizar integração com banco de dados
 * Data: 11/02/2025
 * Autor: Marcel
 * Versão: 1.0
 * Observações:
 *** Para criar a API precisa instalar:
 *      express             npm install express --save
 *      cors                npm install cors --save
 *      body-parser         npm install body-parser --save
 *** Para criar a conexão com banco de dados precisa instalar:
 *      prisma              npm install prisma --save
 *      @prisma/client      npm install @prisma/client --save
 ************************************************************************************/

 //Import das biblioteca para criar a API
const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

//Cria um objeto para o body do tipo JSON
const bodyParserJSON = bodyParser.json()

//Cria um objeto do app para criar a API
const app = express()

//Configurações de permissões do CORS para a API
app.use((request, response, next) =>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())
    
    next()
})

app.post('/v1/controle-musicas/musica', cors(), bodyParserJSON, async function(request, response){
    
})