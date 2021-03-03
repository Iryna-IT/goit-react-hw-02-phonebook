import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Filter.css';
import ContactList from '../ContactList';

class Filter extends Component {
    state = {
        filter: '',
    }
    
    handleChange = e => {
        const { onSearch, contactsListToShow } = this.props;
        const { filter } = this.state;
        const { name, value } = e.currentTarget;

        this.setState({ [name]: value });

        onSearch(filter);

        if (contactsListToShow.length < 0) {return  alert('Nothing found') };
    };

    render() {
        return (
            <form className="form-search">
                <label htmlFor="filter" className="label-search">Find contacts by name</label>
                <input type="text" name="filter" className="input-search"  placeholder="Enter the name" onChange={this.handleChange}></input>
            </form>
        )
    }
}
export default Filter;