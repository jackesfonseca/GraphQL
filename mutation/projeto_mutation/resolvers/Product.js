module.exports = {
    discountPrice(product){
        if(product.discount){
            return product.price * (1 - product.discount)
        }else{
            return product.price
        }
    }
}