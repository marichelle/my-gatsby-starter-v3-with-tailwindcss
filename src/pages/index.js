import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { Layout, Metadata } from '@components'

const IndexPage = () => (
  <Layout>
    <Metadata title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      alt="A Gatsby astronaut"
      width={300}
      quality={95}
      formats={['AUTO', 'WEBP', 'AVIF']}
      className={`mb-6`}
    />
    <p>
      <Link to="/page-2/" className={`text-blue-700 underline`}>
        Go to page 2
      </Link>
    </p>
  </Layout>
)

export default IndexPage
