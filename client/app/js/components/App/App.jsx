import React, { Component } from 'react';

import styles from './App.css';

import Search from '../Search';
import Display from '../Display';
import Header from '../Header';
import Footer from '../Footer';

class App extends Component {
    constructor() {
        super();
        this.state = {
            result: ''
        }
        this.searchResult = this.searchResult.bind(this);
    }

    searchResult(params) {
        this.setState({ result: params });
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <Header />
                <div className={styles.content}>
                    <Search onGetUserData={this.searchResult} />
                    <Display result={this.state.result} />
                </div>
                <Footer />
            </div>
        );
    }
};

export default App;