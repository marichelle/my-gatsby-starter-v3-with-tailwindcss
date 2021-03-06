import * as React from 'react'
import { Link } from 'gatsby'

import { Layout, Metadata } from '@components'

const SecondPage = () => (
  <Layout>
    <Metadata title="Page Two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/" className={`text-blue-700 underline`}>
      Go back to the homepage
    </Link>
  </Layout>
)

export default SecondPage
