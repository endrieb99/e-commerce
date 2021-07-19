const Product = require("../models/product");

const createProduct = async (req, res) => {

    try {
        const product = new Product({
            name: 'Sample name',
            price: 0,
            description: 'sample description',
            user: req.user._id,
            sizes: [],
            images: ['https://i.imgur.com/QN2BSdJ.jpg', 'https://i.imgur.com/QN2BSdJ.jpg', 'https://i.imgur.com/QN2BSdJ.jpg'],
            category: [],
            countInStock: 0,
            numReviews: 0

        })
        const createProduct = await product.save();
        res.status(201).json(createProduct);

    } catch (error) {
        res.status(400).send(error);
    }

}

const getProducts = async (req, res) => {
    try {
        if (req.body.filter) {
            switch (req.body.filter) {
                case 'Rating':
                    const productsbyrating = await Product.find({}).sort('-rating').exec();
                    res.json(productsbyrating)

                    break;
                case 'date':
                    const productsbydate = await Product.find({}).sort('createdAt').exec();
                    res.json(productsbydate)
                    break;
                case 'highprice':
                    const productsbyhighprice = await Product.find({}).sort('price');
                    res.json(productsbyhighprice)

                    break;
                case 'lowprice':
                    const productsbylowprice = await Product.find({}).sort('-price').exec();
                    res.json(productsbylowprice)
                    break;

                default:
                    break;
            }
        }
    } catch (error) {
        res.status(400).send(error);
    }
}

const getProductById = async (req, res) => {

    try {
        const product = await Product.findById(req.params.id)
        if (product) {
            res.json(product)
        } else {
            // status it's 500 by default cuz of errHandler
            res.status(404)
            throw new Error('Product not found')
        }

    } catch (error) {
        res.status(400).send(error);
    }

}


const deleteProduct = async (req, res) => {

    try {
        const product = await Product.findById(req.params.id)
        if (product) {
            await product.remove()
            res.json({ message: 'Product Removed' })
        } else {
            // status it's 500 by default cuz of errHandler
            res.status(404)
            throw new Error('Product not found')
        }

    } catch (error) {
        res.status(400).send(error);
    }

}


module.exports = {
    getProducts,
    createProduct,
    getProductById,
    deleteProduct
}