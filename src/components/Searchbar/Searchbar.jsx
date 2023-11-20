import React, {Component} from "react";
import PropTypes from 'prop-types'
import styles from './searchbar.module.css'


class Searchbar extends Component {
    state = {
        query: '',
    }

    handleChange = e => {
        this.setState({query: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query)
    } 
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
                value={this.state.que}
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