import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = createClient()
  const { data: posts } = await supabase.from('blog').select()

  var post
  return posts?.map((post) => {
    return ( 
      <pre>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <p>{post.created_at}</p>
      </pre>
      
    );
  });
  
  //return <pre>{JSON.stringify(posts, null, 2)}</pre>
  return <pre>{posts}</pre>
}