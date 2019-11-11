import { withRedux } from '../lib/redux'
import { startAbout } from '../store/actions/actions'

import { useSelector } from 'react-redux'

const About = () => {
  const title = useSelector(state => state.title.title)

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

export default withRedux(About)
