import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export const Header = ({ siteTitle }) => (
  <header className="bg-purple-900 mb-6">
    <div className="my-0 mx-auto max-w-4xl py-6 px-4">
      <h1 className="m-0">
        <Link to="/" className="text-white no-underline">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
