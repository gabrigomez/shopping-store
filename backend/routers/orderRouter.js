import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'
import { isAuth } from '../utils.js'

const orderRouter = express.Router()

orderRouter.post(
    '/',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        if (req.body.orderItems.length === 0) {
            res.status(400).send({ message: 'O carrinho está vazio' })
        } else {
            const order = new Order({
                orderItems: req.body.orderItems,
                shippingAddress: req.body.shippingAddress,
                paymentMethod: req.body.paymentMethods,
                itemsPrice: req.body.itemsPrice,
                shippingPrice: 10,
                taxPrice: 0,
                totalPrice: req.body.totalPrice,
                user: req.user.id,
            })

            const createdOrder = await order.save()
            res.status(201).send({ message: 'New Order Created', order: createdOrder })
        }
    })

)

export default orderRouter