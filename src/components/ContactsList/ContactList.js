import s from "./ContactsList.module.css";
import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem/ContactListItem";
import { useSelector, useDispatch } from "react-redux";
import contactsAction from "../../redux/actions";
import { getVisibleContacts } from "../../redux/selectors";

// const ContactList = ({ contacts, onDeleteContact }) => (
 export default function ContactList() {
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();

    const onDeleteContact = (id) => dispatch(contactsAction.deleteContact(id));


  return (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        contactName={name}
        contactNumber={number}
        onClickDeleteContact={() => onDeleteContact(id)}
      />
    ))}
  </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

