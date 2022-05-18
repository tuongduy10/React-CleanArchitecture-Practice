import axiosClient from "../../config/apiClient";

const ProductAPI = {
    getProductList: () => {
        return axiosClient.get('/products')
    },
    getProductById: (id: number) =>{
        return axiosClient.post(`/products/${id}`)
    }
}

export default ProductAPI;