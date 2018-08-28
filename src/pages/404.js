import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div>
      <h2>Not found</h2>
      <h3>
        <Link to="/">
          Take me home, country roads! {` `}
          <span role="img" aria-label="motorway">
            🛣
          </span>
        </Link>
      </h3>
    </div>
  </Layout>
)

export default NotFoundPage
