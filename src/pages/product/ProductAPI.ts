import axiosClient from "../../config/apiClient";

const ProductAPI = {
    getProductList: (params: object) => {
        return axiosClient.get('/products', {params})
    },
    getProductById: (id: number) =>{
        return axiosClient.post(`/products/${id}`)
    }
}

export default ProductAPI;