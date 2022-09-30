export const formatDate = (date) => date.split('T')[0].split('-').reverse().join('-');

export const formDateRange = (date) => date.toISOString().split("T")[0];