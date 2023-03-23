import Product from "../model/products";
import joi from "joi"

const productsSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
});

export const getAll = async (req,res)=>{
    try {
        const products = await Product.find();
        if(products.length === 0){
            return res.json({
                message: 'rỗng',
            });
        }
        res.json(products);
    } catch (error) {
        return res.json({
            message: error,
        });
    }
};

export const get = async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.json({
                message: 'không trùng',
            });
        }
        res.json(product);
    } catch (error) {
        return res.json({
            message: error,
        });
    }
};

export const add = async (req,res)=>{
   
    try {
        const {error} = productsSchema.validate(req.body)
        if(error){
        return res.json({
            message: error.details[0].message,
        });

    }

        const product = await Product.create(req.body);
        if(!product){
            return res.json({
                message: 'không trùng',
            });
        }
        res.json(product);
    } catch (error) {
        return res.json({
            message: error,
        });
    }
};

export const update = async (req,res)=>{
   
    try {
        const {error} = productsSchema.validate(req.body)
        if(error){
        return res.json({
            message: error.details[0].message,
        });

    }

        const product = await Product.updateOne({_id: req.params.id},req.body);
        if(!product){
            return res.json({
                message: 'không trùng',
            });
        }
        res.json(product);
    } catch (error) {
        return res.json({
            message: error,
        });
    }
};

export const remove =  async (req, res)=>{
    try {
        const product = await Product.deleteOne({_id: req.params.id});
        res.json(product);
    } catch (error) {
        return  res.json({
            message: error,
        });
    }
};

