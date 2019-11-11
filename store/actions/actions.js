import actionTypes from './actionTypes'

import axios from 'axios'

const { START, START_ABOUT, ADD, SUB } = actionTypes

export const start = () => async dispatch => {
  const res = await axios.get(`${process.env.BASE_URL}/api?count=20`)

  dispatch({
    type: START,
    payload: Number(res.data.count)
  })
}

export const startAbout = () => async dispatch => {
  const res = await axios.get(`${process.env.BASE_URL}/api/about`)

  dispatch({
    type: START_ABOUT,
    payload: res.data.title
  })
}

export const add = () => {
  return {
    type: ADD
  }
}

export const sub = () => {
  return {
    type: SUB
  }
}
