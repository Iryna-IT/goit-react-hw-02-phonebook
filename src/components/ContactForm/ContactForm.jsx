import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ContactForm.css';
import { v4 as uuidv4 } from 'uuid';


class ContactForm extends Component {
   state = {
        name: '',
        number: '',
    };


    handleChange = e => {
        const { name, value} = e.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { name, number} = this.state;
        const { onAdd } = this.props;
        const { onCheckUnique } = this.props;
  
        if (!onCheckUnique(this.state.name)) return
        const id = uuidv4();
        this.setState({id: id});

        onAdd({ id, name, number });

        this.reset();
  };
    
    
    reset = () => {
    this.setState({ id: '', name: '', number: '' });
  };

    render() {
        return (
        <form className="form-contact" onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="name" className="label-contact">Name</label>
                <input type="text" className="input-contact" name="name" value={this.state.name} placeholder="Enter name" onChange={this.handleChange} required></input>
                
            </div>
            <div>
                <label htmlFor="phone" className="label-contact">Phone</label>
                <input type="tel" className="input-contact" name="number" value={this.state.number} placeholder="Enter phone XXX-XX-XX" onChange={this.handleChange} required></input>
            </div>
            <button type="submit" className="btn-add" onSubmit={this.handleSubmit}>Add contact</button>
        </form>
    )
    }
}

export default ContactForm;