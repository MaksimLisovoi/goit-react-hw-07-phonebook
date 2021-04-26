const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getAllContacts = (state) => state.contacts.contacts;

const getVisibleContacts = (state) => {
  const contacts = getAllContacts(state);
  const filter = getFilter(state);
  const normalFilter = filter.toLowerCase();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalFilter)
  );
};
export default { getLoading, getFilter, getVisibleContacts, getAllContacts };
