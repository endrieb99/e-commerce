const Product = require("../models/product");



const getProducts = async (req, res) => {
    try {

        const category = req.query.category;
        const filter = req.query.filter;
        const from = req.query.from
        const to = req.query.to

        if (category) {
            const products = await Product.find({ category: category });
            res.json(products)
        }
        else if (filter) {
            switch (filter) {

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
        else if (from && to) {
            const productbyprice = await Product.find({ price: { $lte: to }, price: { $gte: from } });
            res.json(productbyprice)
        }
        else {
            const products = await Product.find({});
            res.json(products)
        }
    } catch (error) {
        res.status(400).send(error);
    }
}


const createProduct = async (req, res) => {

    try {
        const product = new Product({
            name: 'Sample name',
            price: 0,
            description: 'sample description',
            user: req.user._id,
            sizes: [],
            images: [],
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

const getProductById = async (req, res) => {

    try {
        const product = await Product.findById(req.params.id)
        if (product) {
            res.json(product)
        } else {
            res.status(404).send({ error: "Product not found" });
        }

    } catch (error) {
        res.status(400).send({ error });
    }

}


const updateProduct = async (req, res) => {
    try {
        const { name, price, description, category, sizes, Images, countInStock } = req.body

        const product = await Product.findById(req.params.id)
        console.log(req.params)
        if (product) {
            product.name = name
            product.price = price
            product.description = description
            product.category = category
            product.sizes = sizes
            product.images = Images
            product.countInStock = countInStock
            const updatedProduct = await product.save();
            res.json(updateProduct)
        } else {
            res.status(404).send({ error: "not found" })
        }
    } catch (error) {
        res.status(400).send({ error });
    }
}

const deleteProduct = async (req, res) => {

    try {
        const product = await Product.findById(req.params.id)
        if (product) {
            await product.remove()
            res.json({ message: 'Product Removed' })
        } else {
            res.status(404).send({ error: "not found" })
        }

    } catch (error) {
        res.status(400).send({ error });
    }

}


module.exports = {
    getProducts,
    createProduct,
    getProductById,
    deleteProduct,
    updateProduct
}