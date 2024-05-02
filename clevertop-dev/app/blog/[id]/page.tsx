import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote/rsc'
import { createClient } from '@/utils/supabase/server'
//import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation'


type Props = {
    params: {id : string}
}
 
export default async function RemoteMdxPage({params: {id}}:Props) {
    //const searchParams = useSearchParams()
    //const search = searchParams.get('post')

    const supabase = createClient()
    const { data: posts } = await supabase.from('blog').select().match({id})
    
    var resSupa = "# If you can see this, then something went wrong"
    posts?.map((post) => {
        ( 
        resSupa = post.content
        
        );
    });
    
    // MDX text - can be from a local file, database, CMS, fetch, anywhere...
    //const res = await fetch('https://raw.githubusercontent.com/vercel/examples/main/solutions/blog/app/blog/posts/spaces-vs-tabs.mdx')
    //const markdown = await res.text()
    return <div className='blogPost'>
        <MDXRemote source={resSupa} />
    </div>
    
    
}