import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
const selectFilter = state => state.contacts.filter;

// createSelector
export const selectFilteredContacts = createSelector(
  // Масив вхідних селекторів
  [selectContacts, selectFilter],
  // Функція перетворювач
  (contacts, filter) => {
    // Виконуємо обчислення та повертаємо результат
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
