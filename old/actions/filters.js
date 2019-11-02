// Filter: update filter by text
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});
//  Filter: update sort by date
export const sortByDate = (date = '') => ({
  type: 'SORT_BY_DATE',
  date,

});
// Filter: update  Sort by  amount
export const sortByAmount = (amount = '') => ({
  type: 'SORT_BY_AMOUNT',
  amount,
});
// Filter: update  Set start date
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate,
});
// Filter: update: Set end date
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate,
});
