import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// --------------------------------------------------------------------------------------------------------------
//                                     action generator
// --------------------------------------------------------------------------------------------------------------
// Expense: Create
const addExpense = (
    {description='', note='', amount=0, createdAt=0}={}
    ) => ({ 
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    },
 });
//  Expense: Delete
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
// Expense: Update
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
    
});
// Filter: update filter by text
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text,
});
//  Filter: update sort by date
const sortByDate = (date  = '') => ({
    type: 'SORT_BY_DATE',
    date,
    
});
// Filter: update  Sort by  amount
const sortByAmount = (amount = '') => ({
    type: 'SORT_BY_AMOUNT',
    amount,
});
// Filter: update  Set start date
const setStartDate = (startDate) => ({ 
    type: 'SET_START_DATE',
    startDate
 });
// Filter: update: Set end date
const setEndDate = (endDate) => ({ 
    type: 'SET_END_DATE',
    endDate
 });
// --------------------------------------------------------------------------------------------------------------
//                                     reducers
// --------------------------------------------------------------------------------------------------------------
// expense reducer
const expenseDefaultState = [];
const expenseReducer =  ( state=expenseDefaultState, action) => {    
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
           return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
           return state.map((expense) => {
               if(expense.id === action.id) {
                   return {
                       ...expense,
                       ...action.updates
                   };
               } else {
                   return expense
               }
           });
        default:
            return state
    };
}
// filter reducer
const filterDefaultState = {
    text: '',
    date: '',
    startDate: undefined,
    endDate: undefined,
};
const filtersReducer = (state=filterDefaultState, action) => { 
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
 }
// --------------------------------------------------------------------------------------------------------------
//                                                SELECTORS
// --------------------------------------------------------------------------------------------------------------
// Gets: expenses of category
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => { 
    return expenses.filter((expense) => { 
        // itemOne.createdAt: 1000
        // itemTwo.createdAt: -1000
        // 
        // startDate:         -125
        // 
        // createdAt >= startDate
        // is createdAt(1000) bigger than or equal to 125? Yes
        // createdAt(25th), startDate(28)Things created on the 25th or after the 25th example 27th should show
        // put another way was it created after the start date? Yes
        // 
        // createdAt <= endDate
        // Things created at or before the end date
        // createdAt(25th), endDate(28)Things created on the 25th or before the 25th example on the 3rd  show
        // is createdAt(1000) smaller than -125. False. 
        // This would not show.
        // Anything that is smaller than or the same as -125 would
        // 
        // This program is to bring all data since your birth May 31, 1993 - 30 Sept 2019
        // It is cool. We can get ALL details about you from the database
        // When you pass in 'pure water bag' no be number? Yes. function exits
        // 
        // 
        // Scenario
        // If startDate is undefined the code on the left returns true and the right hand does not execute
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch   = typeof   endDate !== 'number' || expense.createdAt <=  endDate;

        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
     }).sort((a, b) => { 
         if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
         }
         if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
         }
      });
 }



// // Filter: READ
// const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
//     //* expenses: the array of all expenses
//     return expenses.filter((expense) => { 
//         const startDateMatch = typeof  startDate !== 'number' || expense.createdAt >= startDate;
//         const endDateMatch = typeof   endDate !== 'number' || expense.createdAt >= endDate;
//         const textMatch = true;

//         return startDate && endDateMatch && textMatch;
//      });
//  }
// --------------------------------------------------------------------------------------------------------------
//                                     store
// --------------------------------------------------------------------------------------------------------------
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
);
// --------------------------------------------------------------------------------------------------------------
//                                     subscriptions: get notification on changes
// --------------------------------------------------------------------------------------------------------------
store.subscribe(() => {
    const state = store.getState();
    // * state: the array of all the expenses 
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
    
});
// --------------------------------------------------------------------------------------------------------------
//                                     actions
// --------------------------------------------------------------------------------------------------------------
const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 1000, createdAt: -1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense({id: expenseTwo.expense.id, data: {amount: 5}}));

// store.dispatch(setTextFilter('reds'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate(49));

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));








// ------------------------------------------------------------')
//  adding support for object spread operator
//  
// yarn add babel-plugin-transform-object-rest-spread
// .babelrc
//  {
//   "plugins": ["transform-object-rest-spread"]
// }
