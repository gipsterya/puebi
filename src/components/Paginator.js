import React from 'react'
import Link from '@docusaurus/Link'

function Paginator(props) {
  const {metadata} = props

  return (
    <nav className="pagination-nav" aria-label="Blog list page navigation">
      <div className="pagination-nav__item">
        {metadata.previous && (
          <Link
            className="pagination-nav__link"
            to={metadata.previous.permalink}>
            <div className="pagination-nav__sublabel">
              Sebelumnya
            </div>
            <div className="pagination-nav__label">
              {metadata.previous.title}
            </div>
          </Link>
        )}
      </div>
      <div className="pagination-nav__item pagination-nav__item--next">
        {metadata.next && (
          <Link className="pagination-nav__link" to={metadata.next.permalink}>
            <div className="pagination-nav__sublabel">
              Berikutnya
            </div>
            <div className="pagination-nav__label">
              {metadata.next.title}
            </div>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Paginator
