import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { createClient } from '@/utils/supabase/server'
import React, { useState } from 'react';

interface Props {
  mdxSource: MDXRemoteSerializeResult
}
 
export default function RemoteMdxPage({ mdxSource }: Props) {
    

  return <MDXRemote {...mdxSource} />
}
 
export async function Page() {
    // MDX text - can be from a local file, database, CMS, fetch, anywhere...
    const res = await fetch('https://raw.githubusercontent.com/vercel/examples/main/solutions/blog/app/blog/posts/spaces-vs-tabs.mdx')

    //const supabase = createClient()
    //const { data: posts } = await supabase.from('blog').select()

    //var mdxText = "# cool heading"
    // posts?.map((post) => {
    //     mdxText = post.content
    // });


    const mdxText = await res.text()
    const mdxSource = await serialize(mdxText)
    return { props: { mdxSource } }
}