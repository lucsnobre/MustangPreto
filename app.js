/****************************************************************************/
/* Objetivo: Arquivo principal da API de músicas                           */
/* Data: 10/04/2025                                                         */
/* Autor: Cachorrada                                                        */
/* Versão: 1.0                                                              */
/****************************************************************************/

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Configurações

app.use((request, response, next) =>{
    response.header('Acess-Control-Allow-Origin', '*')
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS' )

    app.use(cors())
    next()
})

// Importando os controllers
const musicaController = require('./Controller/controllerMusica');
const artistaController = require('./Controller/controllerArtista');
const albumController = require('./Controller/controllerAlbum');
const streamingController = require('./Controller/controllerStreaming');
const plataformaController = require('./Controller/controllerPlataforma');
const premioController = require('./Controller/controllerPremio');
const produtorController = require('./Controller/controllerProdutor');
const gravadoraController = require('./Controller/controllerGravadora');
const publicoController = require('./Controller/controllerPublico');

// Rotas de Música
app.get('/musicas', musicaController.listarMusicas);
app.get('/musicas/:id', musicaController.buscarMusica);
app.post('/musicas', musicaController.criarMusica);
app.delete('/musicas/:id', musicaController.deletarMusica);

// Rotas de Artista
app.get('/artistas', artistaController.listarArtistas);
app.get('/artistas/:id', artistaController.buscarArtista);
app.post('/artistas', artistaController.criarArtista);
app.delete('/artistas/:id', artistaController.deletarArtista);

// Rotas de Álbum
app.get('/albuns', albumController.listarAlbuns);
app.get('/albuns/:id', albumController.buscarAlbum);
app.post('/albuns', albumController.criarAlbum);
app.delete('/albuns/:id', albumController.deletarAlbum);

// Rotas de Streaming
app.get('/streamings', streamingController.listarStreamings);
app.get('/streamings/:id', streamingController.buscarStreaming);
app.post('/streamings', streamingController.criarStreaming);
app.delete('/streamings/:id', streamingController.deletarStreaming);

// Rotas de Plataforma
app.get('/plataformas', plataformaController.listarPlataformas);
app.get('/plataformas/:id', plataformaController.buscarPlataforma);
app.post('/plataformas', plataformaController.criarPlataforma);
app.delete('/plataformas/:id', plataformaController.deletarPlataforma);

// Rotas de Prêmio
app.get('/premios', premioController.listarPremios);
app.get('/premios/:id', premioController.buscarPremio);
app.post('/premios', premioController.criarPremio);
app.delete('/premios/:id', premioController.deletarPremio);

// Rotas de Produtor
app.get('/produtores', produtorController.listarProdutores);
app.get('/produtores/:id', produtorController.buscarProdutor);
app.post('/produtores', produtorController.criarProdutor);
app.delete('/produtores/:id', produtorController.deletarProdutor);

// Rotas de Gravadora
app.get('/gravadoras', gravadoraController.listarGravadoras);
app.get('/gravadoras/:id', gravadoraController.buscarGravadora);
app.post('/gravadoras', gravadoraController.criarGravadora);
app.delete('/gravadoras/:id', gravadoraController.deletarGravadora);

// Rotas de Público
app.get('/publicos', publicoController.listarPublicos);
app.get('/publicos/:id', publicoController.buscarPublico);
app.post('/publicos', publicoController.criarPublico);
app.put('/publicos/:id', publicoController.atualizarPublico);
app.delete('/publicos/:id', publicoController.deletarPublico);

// Porta do servidor
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`servidor comendo sua bunda na porta ${PORT}`);
});
