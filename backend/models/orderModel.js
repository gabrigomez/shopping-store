import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
    {
        orderItems =[
            {
                name: { type: String, require },
                qtd: { type: Number, require },
                image: { type: String, require },
                price: { type: Number, require },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    require: true
                }
            }
        ],
        shippingAddress: {
            fullname: { type: String, require },
            address: { type: String, require },
            city: { type: String, require },
            postalCode: { type: String, require }
        },
        paymentMethod: { type: String, require },
        itemsPrice: { type: Number, require },
        shippingPrice: { type: Number, require },
        taxPrice: { type: Number, require },
        totalPrice: { type: Number, require },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', require: true },
        isPaid: { type: Boolean, require },
        paidAt: { type: Date },
        isDelivered: { type: Boolean, require },
        deliveredAt: { type: Date }
    },
    {
        timestamps: true
    }
)

const Order = mongoose.model('Order', orderSchema)

export default Order