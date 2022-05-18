import React, { Component } from 'react';
import Layout from '../MainLayout/Layout';

const ProductLayout = (props: any) => {
    return(
        <Layout>
            <div>Filter</div>

            {props.children}
            
        </Layout>
    )
}

export default ProductLayout;