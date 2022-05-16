import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const layout = (props: any) =>{
    return(
        <div>
            <Header/>

            <div className='container' >
                {props.children}
            </div>

            <Footer/>
        </div>
    )
}

export default layout