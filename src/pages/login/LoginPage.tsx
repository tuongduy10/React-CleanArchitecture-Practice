import React, { Component } from 'react';

class LoginPage extends Component {
    Login = async () => {
        console.log('test')
    }
    
    render() {
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
                    <button onClick={this.Login}>Login</button>
                </div>
            </div>
        );
    }
}

export default LoginPage;