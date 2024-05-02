import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote/rsc'
import { createClient } from '@/utils/supabase/server'
//import React, { useState } from 'react';


 
export default async function RemoteMdxPage() {
    const supabase = createClient()
    const { data: posts } = await supabase.from('blog').select()
    
    var resSupa = "# If you can see this, then something went wrong"
    posts?.map((post) => {
        ( 
        resSupa = post.content
        
        );
    });
    
    // MDX text - can be from a local file, database, CMS, fetch, anywhere...
    //const res = await fetch('https://raw.githubusercontent.com/vercel/examples/main/solutions/blog/app/blog/posts/spaces-vs-tabs.mdx')
    //const markdown = await res.text()
    return <MDXRemote source={resSupa} />
}