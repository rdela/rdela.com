import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div>
      <h3>Not found</h3>
      <p>
        <Link to="/">Take me home!</Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
