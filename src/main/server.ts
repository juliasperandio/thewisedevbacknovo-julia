import express from 'express'
const port = process.env.PORT || 8000
const app = express()

app.get('/', (req, res) => { res.send('Hello World from theWiseDev!') })

app.listen(port, () => { console.log('Our App Is Up And Running!') })
module.exports = app