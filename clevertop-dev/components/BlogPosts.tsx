import { createClient } from '@/utils/supabase/server'

export default async function BlogPosts() {
    const supabase = createClient()
    const { data: posts } = await supabase.from('blog').select()
    

    return posts?.map((post) => {
        return ( 
        <pre>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{post.created_at}</p>
            <p>meow</p>
            <br></br>
        </pre>
        
        );
    });
};