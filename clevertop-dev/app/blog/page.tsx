import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = createClient()
  const { data: posts } = await supabase.from('blog').select()

  var all_posts = JSON.stringify(posts, null, 2)
  
  //return <pre>{JSON.stringify(posts, null, 2)}</pre>
  return <pre>{JSON.stringify(posts, null, 2)}</pre>
}