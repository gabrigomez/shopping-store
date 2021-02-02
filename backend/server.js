import express from 'express'
import data from './data.js'

const app = express()

app.get('/', (req, res) => {
    res.send('Server is on')
})

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is on, port ${port}`)
})