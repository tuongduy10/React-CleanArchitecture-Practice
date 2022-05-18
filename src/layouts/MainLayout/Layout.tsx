import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Layout = (props: any) =>{
    return(
        <>
            <Header/>

            <div className='container main-content' >
                {props.children}
            </div>
            
            <Footer/>
        </>
    )
}

export default Layout