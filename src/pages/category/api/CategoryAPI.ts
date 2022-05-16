import axiosClient from "../../../config/apiClient";

const CategoryAPI = {
    getCategoryList: (params: object) => {
        return axiosClient.get('/categories', {params})
    },

    getCategoryById: (id: number) =>{
        return axiosClient.post(`/category/${id}`)
    }
}

export default CategoryAPI;