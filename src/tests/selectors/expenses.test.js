import selectExpenses from '../../selectors/expenses';

const expenses = [{
  amount: 195,
  createdAt: 0,
  description: 'Gum',
  id: 1,
  note: 'hello',
}, {
  amount: 109500,
  createdAt: -1000,
  description: 'Rent',
  id: 2,
  note: '',
}, {
  amount: 4500,
  createdAt: 1000,
  description: 'Credit Card',
  id: 3,
  note: '',
}];
test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by start date', () => {
  const filter = {};
});
