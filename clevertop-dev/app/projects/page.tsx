import BlogPosts from '@/components/BlogPosts'
import Navbar from '@/components/Navbar'
import ProjectPosts from '@/components/ProjectPosts'


export default async function Page() {
  
  var post
  return (
    <div>
      {/* <div className="flex-1 w-full flex flex-col gap-20 items-center" >
        
      </div> */}
      <div className="projects-flex">
        <ProjectPosts  />
      </div>
    </div>
  )
  
  
  //return <pre>{JSON.stringify(posts, null, 2)}</pre>
  //return <pre>{posts}</pre>
}