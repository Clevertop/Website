import BlogPosts from '@/components/BlogPosts'
import Navbar from '@/components/Navbar'


export default async function Page() {
  
  var post
  return (
    <div>
      <div className="flex-1 w-full flex flex-col gap-20 items-center" >
        
      </div>
      <BlogPosts />
    </div>
  )
  
  
  //return <pre>{JSON.stringify(posts, null, 2)}</pre>
  //return <pre>{posts}</pre>
}