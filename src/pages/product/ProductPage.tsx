import { useEffect, useState, Component } from 'react';
import productAPI from './ProductAPI';
import ProductLayout from '../../layouts/ProductLayout/ProductLayout';
import ProductList from './components/ProductList';

// Fake data
import data from '../../_mock/products.json'

const ProductPage = () =>{
    const [productList, setProductList] = useState<any>([]);

    useEffect(()=>{
        const fetchProductList = async () => {
            try{
                // const response = await productAPI.getProductList();
                setProductList(data);
            }catch(e) {
                console.log('Fail to get', e);
            }
        }
        fetchProductList();
    },[data])

    return (
        <ProductLayout>
            <ProductList data={productList}/>
        </ProductLayout>
    )
};

export default ProductPage