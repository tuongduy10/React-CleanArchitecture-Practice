import { useEffect, useState } from 'react';
import productAPI from './ProductAPI';
import Layout from '../../components/layouts/Layout';

const ProductPage = () =>{
    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        const fetchProductList = async () => {
            try{
                const params = {
                    _pageIndex: 1, 
                    _pageSize: 20
                };
                const response = await productAPI.getProductList(params);
                setProductList(response.data);
            }catch{
                console.log('Fail to get');
            }
        }

        fetchProductList();
    })

    return (
        <Layout>
            <h1>This is Product page</h1>
        </Layout>
    )
};

export default ProductPage