import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const layout = (props: any) =>{
    return(
        <div>
            <Header/>

            {props.children}

            <Footer/>
        </div>
    )
}

export default layout