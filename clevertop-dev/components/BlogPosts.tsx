import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'

export default async function BlogPosts() {
    const supabase = createClient()
    const { data: posts } = await supabase.from('blog').select()
    

    return posts?.map((post) => {
        return ( 
        <div className='card'>
            <Link
            className='blogPost'
            key={post.id}
            href={`/blog/${post.id}`}
            >
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                {/* <p>{post.content}</p> */}
                <p>{post.created_at}</p>
                <p>meow</p>
                <br></br>
            </Link>
        </div>
        );
    });
};