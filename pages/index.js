import { withRedux } from '../lib/redux'
import Counter from '../components/Counter/Counter'
import Link from 'next/link'
import { start } from '../actions/actions'
import Layout from '../components/Layout/Layout'

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Counter />
      </Layout>
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
