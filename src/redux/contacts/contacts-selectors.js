import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getAllContacts = (state) => state.contacts.contacts;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLocaleLowerCase())
    )
);

export default { getLoading, getFilter, getVisibleContacts, getAllContacts };
