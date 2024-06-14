import { createClient } from '@/utils/supabase/server'
import { Button } from '@nextui-org/button';
import {Link} from "@nextui-org/link";
//import Link from 'next/link'
//import {Button} from "@nextui-org/react";

export default async function ProjectPosts() {
    const supabase = createClient()
    const { data: posts } = await supabase.from('projects').select()
    

    return posts?.map((post) => {
        return ( 
            
        <div className='project-tile-small' >
            {/* <img src={post.image}></img> */}
            <div className='card'
            //className='blogPost'
            key={post.id}
            // href={post.link}
            >
                <img src={post.image}></img>
                <div className='card-content'>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
                {/* <p>{post.created_at}</p> */}
                
                {/* <p>meow</p>*/}
                <br></br>
                
                {post.project_link != "" &&
                <Button className="projectButton"
                    href={post.project_link}
                    as={Link}
                    showAnchorIcon
                    variant="solid" 
                >  
                    Project
                </Button>
                }
                
                {post.github_link != "" && 
                    <Button className="projectButton"
                        href={post.github_link}
                        as={Link}
                        showAnchorIcon
                        variant="solid" 
                        color="secondary"
                    >  
                        Repo
                    </Button>
                }
                </div>
            </div>
        </div>
        );
    });
};