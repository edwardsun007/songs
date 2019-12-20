import React from "react";
import { connect } from "react-redux";
import {createStore, combineReducers} from 'redux';

const increment = () => ({ type: 'increment' });
const decrement = () => ({ type: 'decrement' });

const Counter = (props) => {
    return (
        <div>
            <button className="increment" onClick={()=>props.goUp()}>Increment</button>
            <button className="decrement" onClick={()=>props.goDown()}>Decrement</button>
            Current Count: <span>{props.count}</span>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
};

const WrappedCounter = connect(mapStateToProps,{goUp:increment, goDown:decrement})(Counter);

// Only change code *before* me!
// -----------

const store = createStore(combineReducers({
    count: (count = 0, action) => {
        if (action.type === 'increment') {
            return count + 1;
        } else if (action.type === 'decrement') {
            return count - 1;
        } else {
            return count;
        }
    }
}));