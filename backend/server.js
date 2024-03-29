import express from 'express'
import data from './data.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routers/userRouter.js'
import orderRouter from './routers/orderRouter.js'

const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:beerstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})


app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x.id == req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: 'product not found' })
    }
})

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)
app.get('/', (req, res) => {
    res.send('Server is on')
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is on, port ${port}`)
})