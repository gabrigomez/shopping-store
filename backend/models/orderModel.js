import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
    {
        orderItems: [
            {
                name: { type: String, required: true },
                qtd: { type: Number, required: true },
                image: { type: String, required: true },
                price: { type: Number, required: true },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true
                }
            }
        ],
        shippingAddress: {
            fullname: { type: String, required: true },
            address: { type: String, required: true },
            city: { type: String, required: true },
            postalCode: { type: String, required: true }
        },
        paymentMethod: { type: String, required: true },
        itemsPrice: { type: Number, required: true },
        shippingPrice: { type: Number, required: true },
        taxPrice: { type: Number, required: true },
        totalPrice: { type: Number, required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
        isPaid: { type: Boolean, default: false },
        paidAt: { type: Date },
        isDelivered: { type: Boolean, default: false },
        deliveredAt: { type: Date }
    },
    {
        timestamps: true
    }
)

const Order = mongoose.model('Order', orderSchema)

export default Order


//Cast to ObjectId failed for value "1" at path "product", 
//shippingAddress.fullname: Path `shippingAddress.fullname` is required., 
//itemsPrice: Path `itemsPrice` is required., totalPrice: Path `totalPrice` is required.