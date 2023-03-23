import express from "express"
import {add,getAll,get,update, remove} from "../controller/products";

const routerProducts = express.Router();
routerProducts.get('/products', getAll);
routerProducts.get('/products/:id', get);
routerProducts.patch('/products/:id', update);
routerProducts.post('/products', add);
routerProducts.delete('/products/:id',remove);

export default routerProducts;