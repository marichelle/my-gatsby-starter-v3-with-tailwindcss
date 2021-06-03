import React from 'react'

export const Footer = () => {
  return (
    <footer
      style={{
        marginTop: `2rem`,
      }}
    >
      &copy; {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}
