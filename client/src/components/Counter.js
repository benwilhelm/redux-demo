import React, { useEffect } from 'react'
import store, { incrementAPI, getCountAPI, increment, incrementBy, decrement, decrementBy } from '../store'
import { connect } from 'react-redux'

function Counter({ count, dispatchGetCount, dispatchIncrement, dispatchDecrement, dispatchIncrementBy, dispatchDecrementBy }) {

  useEffect(() => {
    dispatchGetCount()
  }, [dispatchGetCount])

  return (
    <div>
      <p>Count: {count}</p>
      <p>
        <button onClick={() => dispatchDecrementBy(2)}>Decrement by 2</button>
        <button onClick={dispatchDecrement}>Decrement</button>
        <button onClick={() => dispatchIncrement({ undoValue: count})}>Increment</button>
        <button onClick={() => dispatchIncrementBy(2)}>Increment by 2</button>
      </p>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  count: state.counter.count
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatchGetCount: () => dispatch(getCountAPI()),
  dispatchIncrement: ({ undoValue }) => {
    dispatch(increment())
    dispatch(incrementAPI({ undoValue }))
  },
  dispatchIncrementBy: (num) => dispatch(incrementBy(num)),
  dispatchDecrement: () => dispatch(decrement()),
  dispatchDecrementBy: (num) => dispatch(decrementBy(num)),
})

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default ConnectedCounter
