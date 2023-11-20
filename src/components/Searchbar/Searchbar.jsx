import React, {Component} from "react";
import PropTypes from 'prop-types'
import styles from './searchbar.module.css'
import Notiflix from "notiflix";

class Searchbar extends Component {
    state = {
        query: '',
    }

    handleChange = e => {
        this.setState({query: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.query.trim() === '') {
            return Notiflix.Notify.warning(
                'Type something to see the results'
            );
        }
        this.props.onSubmit(this.state);
        this.setState({query: ''});
    };

    render() {
        return(
            <header className={(styles["Searchbar"])}>
            <form className={(styles["SearchForm"])}>
                <button type="submit" className={(styles["SearchForm-button"])}>
                <span className={(styles["SearchForm-button-label"])}>Search</span>
                </button>

                <input
                class={(styles["SearchForm-input"])}
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search images and photos"
                onChange={this.handleChange}
                value={this.state.query}
                />
            </form>
            </header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;