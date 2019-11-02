import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// --------------------------------------------------------------------------------------------------------------
//                                     action generator
// --------------------------------------------------------------------------------------------------------------
// Create 
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
//  Delete
const removeExpense = ({id} = {}) => ({
    type: 'DELETE_EXPENSE',
    id
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
        case 'DELETE_EXPENSE':
           return state.filter(({id}) => id !== action.id);
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
        default:
            return {
                state
            };
    }
 }
// --------------------------------------------------------------------------------------------------------------
//                                     store
// --------------------------------------------------------------------------------------------------------------
const store = createStore(
    combineReducers({
        expense: expenseReducer,
        filters: filtersReducer
    })
);
// --------------------------------------------------------------------------------------------------------------
//                                     subscriptions: get notification on changes
// --------------------------------------------------------------------------------------------------------------
store.subscribe(() => {
    console.log('====>=: store.getState()', store.getState());
});
// --------------------------------------------------------------------------------------------------------------
//                                     actions
// --------------------------------------------------------------------------------------------------------------
const expense1 = store.dispatch(addExpense({description: 'rent', amount: 100,}));
const expense = store.dispatch(addExpense({description: 'coffee', amount: 1000,}));
store.dispatch(removeExpense({id: expense1.expense.id}));



// ------------------------------------------------------------')
//  dispatcher({}) ---> createStore()
//  createStore() ---- reducer()
//  reducer  creates a new state