import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'

export default async function ProjectPosts() {
    const supabase = createClient()
    const { data: posts } = await supabase.from('projects').select()
    

    return posts?.map((post) => {
        return ( 
        <div className='card'>
            <Link 
            className='blogPost'
            key={post.id}
            href={post.link}
            >
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p>{post.created_at}</p>
                <img src={post.image}></img>
                <p>meow</p>
                <br></br>
            </Link>
        </div>
        );
    });
};