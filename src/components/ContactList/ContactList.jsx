import React, { Component } from 'react';

import styles from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    const { onDelete } = this.props;
    if (contacts.length === 0) {
      return <div>Nothing found</div>;
    } else {
      return (
        <ul className={styles.contact_list}>
          {contacts.map(contact => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={onDelete}
            />
          ))}
        </ul>
      );
    }
  }
}

class Contact extends Component {
  handleDelete = e => {
    const { onDelete } = this.props;
    const contactId = e.target.parentNode.id;
    onDelete(contactId);
  };

  render() {
    const { id, name, number } = this.props;
    return (
      <li className={styles.contact_item} id={id}>
        {' '}
        {name} : {number}
        <button
          type="button"
          className={styles.btn_delete}
          onClick={this.handleDelete}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default ContactList;
