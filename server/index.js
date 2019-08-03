const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const http = require('axios')
const app = express()
require('dotenv').config()


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

app.post('/_auth/oauth/laravel.passport/authorize', function (req, res, next) {
  let response = null;
  http.post(process.env.API_SERVER_ENDPOINT + 'oauth/token', {
    grant_type: 'authorization_code',
    client_id: process.env.PASSPORT_CLIENT_ID,
    client_secret: process.env.PASSPORT_CLIENT_SECRET,
    redirect_uri: process.env.REDIRECT_URI,
    code: req.body.code
  }).then(tokenResponse => {
    response = tokenResponse.data
    console.log(response)
    res.json(response)
  }).catch(error => {
    console.error('failed')
    res.json({
      status: 'failed'
    })
  });
})

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  // Give nuxt middleware to express
  app.use(nuxt.render)
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
