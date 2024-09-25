import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, incrementByAmount } from '../../redux/counterSlice'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="container text-center mt-5">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button
        className="btn btn-primary mx-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button className="btn btn-danger mx-2" onClick={() => {}}>
        Decrement
      </button>
      <button
        className="btn btn-secondary mx-2"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        Increment by 5
      </button>
    </div>
  )
}

export default Counter
