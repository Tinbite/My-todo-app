console.log("hello server")
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


 require('./passport')

require('./routes')(app)




sequelize.sync({ force: false })
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
/*
  app.get('/api', (req, res) => {
    res.json({
        message:  'Have fun!'
    })
})

app.post('/api/posts', (req, res) => {
    res.json({
        message:  'Your user was registered! Have fun!'
    })
})
app.post('/api/login',(req, res) => {
  const user = {
    id:1,
    username: 'brad',
    email: 'brad@gmail.com'
  }
  jwt,sign({user}, 'secretkey', (err, token) => {
    res.json({
      token
  }) 
  })
})

app.listen(process.env.PORT || 8081)
*/


