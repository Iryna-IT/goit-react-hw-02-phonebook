import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import './ContactList.css';

class ContactList extends Component {       
    render() {
        const { contacts } = this.props;
        const { onDelete } = this.props;
        return (
            <ul className='contact-list' >
                {contacts.map((contact) => (
                    <Contact key={contact.id} id={contact.id} name={contact.name} number={contact.number} onDelete={onDelete}/>
                ))}
            </ul>
        );
    };
}

class Contact extends Component {
    handleDelete = e => {
        const { onDelete } = this.props;
        const contactId = e.target.parentNode.id;
        console.log(e.target.parentNode.id);
        onDelete(contactId);
    };

    render() {
       const { id, name, number } = this.props;
        return (
            <li className='contact-item' id={id}> {name} : {number}
            <button type="button" className="btn-delete" onClick={this.handleDelete}>Delete</button>
            </li>
        );
    }
};

export default ContactList;