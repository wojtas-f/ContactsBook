import React, { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import Contact from '../components/Contact';

import getUsers from '../api/api';

const List = () => {
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    const users = await getUsers();
    console.log(users);
    if (users) setContacts(users);
  };

  useEffect(() => {
    getContacts();
  }, []);

  const contactsList = contacts.map((contact) => (
    <Contact key={contact.id.value} user={contact} />
  ));
  return <Layout>{contactsList}</Layout>;
};

export default List;
