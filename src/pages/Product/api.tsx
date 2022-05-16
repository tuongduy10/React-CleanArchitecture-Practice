import axiosClient from "../../config/api";

const product = {
    getProductList: (params: JSON) => {
        return axiosClient.get('/products', {params})
    },

    getProductById: (id: number) =>{
        return axiosClient.post(`/products/${id}`)
    }
}

export default product;