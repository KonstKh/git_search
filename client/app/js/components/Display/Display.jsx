import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Display.css';

class Display extends Component {
    constructor(props) {
        super(props);

        this.state = {
            starRepos: [],
            avatarUrl: '',
            login: ''
        }

        this.getStarredRepos = this.getStarredRepos.bind(this);
        this.renderStarredRepos = this.renderStarredRepos.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const parsed = JSON.parse(this.props.result);
        const avaUrl = parsed.avatar_url;
        const login = parsed.login;

        if (prevProps.result === "" || JSON.parse(prevProps.result).login !== login) {
            this.setState({
                avatarUrl: avaUrl,
                login: login
            });
        }
    }

    componentWillReceiveProps() {
        this.setState({
            starRepos: '',
            login: '',
            avatarUrl: ''
        })
    }

    getStarredRepos() {
        const parsed = JSON.parse(this.props.result);
        const login = parsed.login;

        fetch('api/starred/' + login).then((response) => {
            return response.text();
        }).then((jsonResult) => {
            const parsedResult = JSON.parse(jsonResult);

            this.setState({
                starRepos: parsedResult,
                login: login
            });
        });
    }

    renderStarredRepos() {
        const repos = this.state.starRepos;
        if (!repos || repos.length == 0) return;
        return repos.map((item) => {
            return (
                <div key={item.id} className={styles.reposItem}>
                    <img src={item.owner.avatar_url} alt="owner avatar" />
                    <a href={item.url}> {item.full_name}</a>
                    <div className={styles.description}>
                        <span>{item.description}</span><br />
                        <span>{item.language}</span>
                        <span>Stars:{item.stargazers_count}</span>
                        <span>Updated at:{new Date(item.updated_at).toDateString()}</span>
                    </div>
                </div>
            )
        });
    }

    render() {
        const detailsClasses = classNames(styles.details, {
            [styles.hidden]: !this.state.avatarUrl
        });

        return (
            <div className={styles.display}>
                <span>{this.state.login}</span><br />
                <img src={this.state.avatarUrl} alt={this.state.login} /><br />
                <div className={detailsClasses}>
                    <button onClick={this.getStarredRepos} className={styles.reposButton}>Starred Repos</button>
                    {this.renderStarredRepos()}
                </div>
            </div>
        )
    }
}

Display.propTypes = {
    result: PropTypes.string.isRequired
}

export default Display;