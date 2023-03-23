import mongoose from "mongoose";
const productsSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    }
});
export default mongoose.model(`product`, productsSchema);
