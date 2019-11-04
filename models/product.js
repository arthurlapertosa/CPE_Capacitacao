const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: String

}, { timestamps: true });

const ProductModel = mongoose.model('Product', productSchema);

class Product {
    static createNew(product){
        return new Promise ((resolve, reject) =>{
            ProductModel.create(product).then((result) =>{
                resolve(result);
            }).catch(err =>{
                reject(err);
            })
        });
    }

    static updateById(product, id){
        return new Promise((resolve, reject) => {
            ProductModel.updateById(product, id).then((result)=>{
                resolve (result);
            }).catch(err => {
                
            })
        })
    }
}

module.exports = Product;