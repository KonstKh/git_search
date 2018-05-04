import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Search.css'

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: ''
        }
        this.userNameInput = React.createRef();

        this.fetchUserName = this.fetchUserName.bind(this);
        this.searchUserProfile = this.searchUserProfile.bind(this);
    }

    componentDidMount() {
        this.userNameInput.current.focus();
    }

    fetchUserName(event) {
        this.setState({ input: event.target.value });
    }

    searchUserProfile(event) {
        fetch('api/users/' + this.state.input)
            .then((response) => {
                if (!response.ok) { throw response; }
                return response.text();
            })
            .then((res) => {
                const resJson = JSON.parse(res);
                this.setState({
                    result: res
                });
                this.props.onGetUserData(res);
            })
            .catch(err => { console.log("error", err) });
    }

    render() {
        return (
            <div className={styles.search}>
                <input type="text" className={styles.searchInput} ref={this.userNameInput} onChange={this.fetchUserName} placeholder="Type username" />
                <input type="submit" className={styles.searchButton} value="Search" onClick={this.searchUserProfile} />
            </div>
        )
    }

}

Search.propTypes = {
    onGetUserData: PropTypes.func.isRequired
}

export default Search;