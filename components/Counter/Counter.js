import { connect } from 'react-redux'
import { add, sub } from '../../actions/actions'

import './Counter.scss'

const Counter = ({ count, onAdd, onSub }) => {
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

const mapStateToProps = ({ counter }) => {
  return {
    count: counter.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
