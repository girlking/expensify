import { createStore } from 'redux';

 
const incrementCount =  ({ incrementBY = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBY

 })
 
const decrementCount =  ({ decrementBY = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBY

 })
const resetCount =  () => ({
    type: 'SET',
    count: 101
 })

// Store
const store = createStore(( state={count:0}, action) => {
    const { incrementBY, type, count}  = action;
    switch (type) {
        case 'INCREMENT':
            return {
                count: state.count + incrementBY
        }
        case 'DECREMENT':
            const reduceNum = decrementBy;
            const decrementBy = typeof reduceNum === 'number' ? reduceNum : 1;
            return {
                count: state.count - decrementBy
        }
        case 'SET':
            // Count is mandatory    
            return {
                count: count
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

// Action
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount());


// ------------------------------------------------------------
// Action generators
//  const incrementCount = () => ({type: 'INCREMENT'});
//  const store.dispatch(incrementCount());
// 
// inline action objects
// store.dispatch(incrementCount({type: 'INCREMENT'}));
// 
// Action generators vs inline objects
// The advantage of action generators is they are less error prone
// They and easier to write
// ------------------------------------------------------------
// Refactoring 
// const incrementCount =  (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBY: typeof payload.incrementBY === 'number' ? payload.incrementBY : 1
// 
//  })
// Better way
// const incrementCount =  ({ incrementBY = 1 } = {}) => ({
//     type: 'INCREMENT',
//     incrementBY: incrementBy
// 
//  })
// 
// part 2: ( { incrementBy } = {})  
// Either the  value of on the left or value on the right
// This is setting default value of the argument {incrementBy} {} if none 
// is provided
//     example2: (payload = {})
// 
// part2: ({ incrementBY = 1 } = {})
// We set default values for a destructed object
// This says if incrementBy exists use its value, else use one.
// 
//   function Hi({increment = 1 } = {} ) {};
//   hi({incrementBy: 20}) ---The argument becomes 20
//   hi()                  ---The argument becomes {} if no object is provided
//   hi({no: })            ---The argument becomes 1 when there is an object provided but it does not include incrementBy
// Destructor the object to be either
// 

