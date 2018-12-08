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


sequelize.sync({ force: true })
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })

/*app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! Your user was registered! Have fun!`
    })
})

app.listen(process.env.PORT || 8081)
*/


