import React, { Component } from 'react';

const LoginPage = () =>{
    function signIn(){
        console.log('loged in');
    }

    return (
        <div className='w-100'>
            <div className='text-center'>
                <div className=''>
                    <label htmlFor="username">Username</label>
                    <input name='username' type="text" placeholder='Username' />
                </div>
                <div className=''>
                    <label htmlFor="password">Password</label>
                    <input type="text" placeholder='Password' />
                </div>
                <button onClick={signIn}>Login</button>
            </div>
        </div>
    );
}

export default LoginPage;