import { createStore, combineReducers } from 'redux';
// --------------------------------------------------------------------------------------------------------------
//                                     reducers: departments
// --------------------------------------------------------------------------------------------------------------
// expense reducer
const expenseDefaultState = [];
const expenseReducer =  ( state=expenseDefaultState, action) => {
    switch (action.type) {
        default:
          return {state};
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
//                                     subscriptions
// --------------------------------------------------------------------------------------------------------------
store.subscribe(() => {
    console.log('=====> store.getState()', store.getState());
});
// --------------------------------------------------------------------------------------------------------------
//                                     actions
// --------------------------------------------------------------------------------------------------------------
store.dispatch({
    type: 'ADD_EXPENSE',
    description: 'rent',
    amount: 5
});








// ------------------------------------------------------------')
//  combined reducers takes an object
//  store.createStore({kindOFDispatch: reducerFunction});
// 
//  This is similar to having multiple store warehouse branches
//  normally any request that comes is by one big department
//  now we split our store into multiple departments
//  
// 
// 
//  step one. create the departments
//    register the reducer on the combined store
//    store.createStore(combinedReducer(
//       hairMatters: hairMattersReducer
//    ));
// 
//  step2 assign the hair department the tasks they are to perform
//  const hairMattersReducer = (state={count:0}, action ) => {
//    switch(action.type) {
//      default: 
//        return state;
//    }
//  };
//  
// 
// 
// 2