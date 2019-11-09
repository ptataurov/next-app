import actionTypes from '../actions/actionTypes'

const { START_ABOUT } = actionTypes

const initialState = {
  title: 'Hello world!'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START_ABOUT:
      return {
        title: action.payload
      }

    default:
      return state
  }
}
