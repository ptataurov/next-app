import actionTypes from '../actions/actionTypes'

const { START, ADD, SUB } = actionTypes

const initialState = {
  count: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        count: action.payload
      }

    case ADD:
      return {
        count: state.count + 1
      }

    case SUB:
      return {
        count: state.count - 1
      }

    default:
      return state
  }
}
