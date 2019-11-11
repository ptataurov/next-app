import { useSelector, useDispatch } from 'react-redux'
import { add, sub } from '../../store/actions/actions'

import './Counter.scss'

const Counter = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  const onAdd = () => dispatch(add())
  const onSub = () => dispatch(sub())

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={onAdd}>+1</button>
      <button onClick={onSub}>-1</button>
    </div>
  )
}

export default Counter
