import React, { useEffect } from 'react';
import Notification from 'components/Notification/Notification';
import { fetchContacts, deleteContact } from 'redux/operations';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';

import {
  List,
  ListItem,
  Button,
} from 'components/ContactList/ContactList.Styled';

export default function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const { contacts } = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    if (normalizedFilter === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = filterContacts();
  const hasContacts = filteredContacts.length > 0;
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <Notification message={'Sorry, something went wrong'} />
      ) : hasContacts ? (
        <List>
          {filteredContacts.map(contact => {
            return (
              <ListItem key={contact.id}>
                {contact.name}: {contact.phone}
                <Button onClick={() => onDeleteContact(contact.id)}>
                  Delete
                </Button>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <Notification
          message={
            filter
              ? `No contacts with name '${filter}'`
              : 'No contacts in your phonebook'
          }
        />
      )}
    </div>
  );
}
