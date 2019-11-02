import { createStore } from 'redux';

// Store
const store = createStore((state =  { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const addNum = action.incrementBY;
            const incrementBY = typeof addNum === 'number' ? addNum : 1;
            return {
                count: state.count + incrementBY
        }
        case 'DECREMENT':
            const reduceNum = action.decrementBy;
            console.log('========================: -------------------------------------------------------');
            console.log('========================: store -> reduceNum', reduceNum);
            console.log('========================: -------------------------------------------------------');
            const decrementBy = typeof reduceNum === 'number' ? reduceNum : 1;
            return {
                count: state.count - decrementBy
        }
        case 'SET':
            // Count is mandatory    
            return {
                count: action.count
        }
        case 'RESET':
            return {
                count: state.count = 0
        }
        default:
        return state;
    };
});
store.subscribe(() => {
    console.log('========================: ------------------------------------------------------------');
    console.log('========================: store.getState()', store.getState());
    console.log('========================: ------------------------------------------------------------');
});

// Action: 
store.dispatch({
    type: 'INCREMENT',
    incrementBY: 5

});

store.dispatch({
    type: 'INCREMENT',
});

store.dispatch({
    type: 'RESET',
});
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});
store.dispatch({
    type: 'DECREMENT',
});
store.dispatch({
    type: 'SET',
    count: 101
});

// ------------------------------------------------------------')
// subscribing to a store
// 
// 
// store.subscribe() method gets called anytime the state is changed
// 
// Example the store.dispatch() changes the state
// It is similar to you are subscribed to a site on a site,
// anytime there is new post you get an email notification
// store.subscribe( functionHandleNewState ) you are subscribed to a stores state
// anytime the stores state is changed, a function executes.
// this is like an eventHandler on storesState: button.addEvenListener(click, handleClick);
// 
// you can perform an action whenever the state is changed
// 
// ------------------------------------------------------------')
// unsubscribing from a store
// const unsubscribe = store.subscribe(() => {console.log(store.getState())});
// unsubscribe();  ==> unsubscribing from a store
// 
// The return value of store.subscribe() allows you to unsubscribe from a store
// When you unsubscribe you would no longer be notified of stores state changes
// It is like removing the eventListeners
// ------------------------------------------------------------')
// Passing data to actions: dispatching dynamic actions
// store.dispatch({type: 'INCREMENT', newData: 'hello'})
// store.createStore( (state = {count: 0}, action ) => {
//   switch(action.type) {
//      case 'INCREMENT': 
//        const incrementBy = typeof action.incrementBy == 'number' ? action.incrementBy : 1;  // *
//        return { count: state.count + incrementBy}
//      }
//   })
//  A dispatch writer always carries packages to be sent to someone
// 
//  store.dispatch({});
// 
//  The required property action is the type, which is similar to who the dispatch is sent to
//  The action to be sent
//    .dispatch({type: 'INCREMENT_Me'})
//  The dispatch can also contain other data
//    .dispatch({type: 'INCREMENT_Me', book: sold })
// 
//  step1: The dispatch rider is sent with the package. It must contain at least who the package is sent to
//    store.dispatch({type: 'JOHN_56_MORONFOLU_YABA'})
// 
// 
//  step2: The dispatch rider takes the package to the store.
//    The dispatch immediately calls the createStore(action) method, passing in the package
// 
// 
//  step3: The store checks the receiver and performs operaions based on the s
//    case 'JOHN_56_MORONFOLU_YABA': 
//       return {count: 59}
// 
//    The dispatch takes the data to the store and the receiver is checked. So the goods are sorted by that receiver
// 
// 
// 
// 
// 
// 
// ------------------------------------------------------------')
//  Creating an action that has required type by using it directly as
// as opposed to checking if the type exists
//  store.dispatch({type: 'SET', count: 23});
// 
//  case 'INCREMENT':
//    return { count = action.count }  --> *
// 
// In line * we did not check if the count is provided