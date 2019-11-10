import { withRedux } from '../lib/redux'
import { startAbout } from '../actions/actions'

import { connect } from 'react-redux'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'

const About = ({ title }) => {
  return (
    <>
      <h1>About page</h1>
      <h4>{title}</h4>
    </>
  )
}

About.getInitialProps = ({ reduxStore }) => {
  // Tick the time once, so we'll have a
  // valid time before first render
  const { dispatch } = reduxStore

  return dispatch(startAbout())
}

const mapStateToProps = state => {
  return {
    title: state.title.title
  }
}

export default withRedux(connect(mapStateToProps)(About))
