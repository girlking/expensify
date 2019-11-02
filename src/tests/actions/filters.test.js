import moment from 'moment';
import {
  setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter,
} from '../../actions/filters';

// Sort By startDate
test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

// Sort By endDate
test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  });
});

// Sort By amount
test('should generate set end date action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
});

// Sort By date
test('should generate set end date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
});

// Set text filter with value
test('should generate set text filter action object with text value', () => {
  const text = 'someday at a time';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text,

  });
});

// Set text filter with default
test('should generate set text filter action object with default text value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});
