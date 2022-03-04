import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import { Form, Input, SearchIcon } from './styles'

export default connectSearchBox(({ refine, ...rest }) => (
  <Form>
    <Input
      type="text"
      placeholder="Search posts"
      aria-label="Search posts"
      onChange={(e) => refine(e.target.value)}
      {...rest}
    />
    <SearchIcon />
  </Form>
))
