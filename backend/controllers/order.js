const Order = require("../models/order");



const addOrder = async (req, res) => {

    try {
        const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body

        if (orderItems && orderItems.length === 0) {
            return res.status(400).send({ error: "No order items" });
        } else {
            const order = new Order({
                user: req.user._id,
                orderItems,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                taxPrice,
                shippingPrice,
                totalPrice
            })
            const createdOrder = await order.save()

            res.status(201).json(createdOrder)
        }

    } catch (error) {
        res.status(400).send({ error })
    }
}


const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).populate('user', 'id name');
        res.status(200).send({ orders });
    } catch (error) {
        res.status(400).send({ error })
    }
}

module.exports = {
    getOrders,
    addOrder
}