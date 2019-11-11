import { withRedux } from '../lib/redux'
import Counter from '../components/Counter/Counter'
import { start } from '../store/actions/actions'

const IndexPage = () => {
  return (
    <>
      <Counter />
    </>
  )
}

IndexPage.getInitialProps = ({ reduxStore }) => {
  // Tick the time once, so we'll have a
  // valid time before first render
  const { dispatch } = reduxStore

  return dispatch(start())
}

export default withRedux(IndexPage)
