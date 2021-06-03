import React from 'react'

export const Footer = () => {
  return (
    <footer className="mt-8">
      &copy; {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com" className="text-blue-700 underline">
        Gatsby
      </a>
    </footer>
  )
}
