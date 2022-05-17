import React from 'react';
import Layout from '../../components/layouts/Layout';
import { connect } from 'react-redux';
import {
    increaseCounter,
    decreaseCounter
} from '../../features/Counter/counter.actions';

const HomePage = (props: any) => {
    return (
        <Layout>
            <div className='text-center mb-4'>
                <h1 className=''>This is Home Page</h1>
                <h5 className=''>Redux practice</h5>
                <div className="App">
                    <div>Count: {props.count}</div>
                    <button onClick={() => props.increaseCounter()}>Increase Count</button>
                    <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
                </div>
            </div>
        </Layout>
    )
}

const mapStateToProps = (state: any) => {
    return {
        count: state.counter.count,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        increaseCounter: () => dispatch(increaseCounter()),
        decreaseCounter: () => dispatch(decreaseCounter()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)