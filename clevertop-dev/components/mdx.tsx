import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'

export function CustomMDX(props) {
    return (
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    )
  }