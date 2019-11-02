import { createStore } from 'redux';

// Store
const store = createStore((state =  { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
        }
        case 'DECREMENT':
            return {
                count: state.count - 1
        }
        case 'RESET':
            return {
                count: state.count = 0
        }
        default:
        return state;
    };
});

// Action
store.dispatch({
    type: 'INCREMENT',
});
store.dispatch({
    type: 'INCREMENT',
});
store.dispatch({
    type: 'RESET',
});

store.dispatch({
    type: 'DECREMENT',
});
console.log('========================: ------------------------------------------------------------');
console.log('========================: store.getState()', store.getState());
console.log('========================: ------------------------------------------------------------');


// ------------------------------------------------------------')
// install redux
// yarn add redux
// ------------------------------------------------------------')
// import create store
// import { createStore } from 'redux';
// ------------------------------------------------------------')
// create a store
// const store = createStore((state =  { count: 0}) => {
//     return state;
//  });
// 
// // Create store takes a function   as its one and only argument 
// The function has one parameter state.
//  You can set state to a default value. If no state is found it uses the default
//  state is of type: object
// ------------------------------------------------------------')
//   View the state
//   store.getState()
// ------------------------------------------------------------')
//   Actions: used to change state. 
//   store.dispatch({
//    type: 'INCREMENT'
//   });
// 
//   Actions are of type object
//   When ever a dispatch is called. store.dispatch() store.create executes
//   Actions are how we communicate with the store.
//   That is how we modify the stores state
//  ------------------------------------------------------------');
// Using actions in create store
//  switch (action.type) {
//    case 'INCREMENT':
//      return {
//        count: state.count + 1
//      }
//    default:
//      return state; //  ---This sets the initial state.
//                   //  At first the switch statement would not match anyone
//  }