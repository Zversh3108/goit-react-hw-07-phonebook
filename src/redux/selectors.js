export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
export const selectIsDeleting = state => state.contacts.isDeleting;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
