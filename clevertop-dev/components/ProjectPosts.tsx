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
        <div className='card'>
            <div 
            className='blogPost'
            key={post.id}
            // href={post.link}
            >
                <h1>{post.title}</h1>
                <p>{post.description}</p>
                {/* <p>{post.created_at}</p> */}
                <img src={post.image}></img>
                {/* <p>meow</p>*/}
                <br></br>
                
                {post.project_link != "" &&
                <Button className="projectButton"
                    href={post.project_link}
                    as={Link}
                    showAnchorIcon
                    variant="solid" 
                >  
                    Project Page
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
                        Repository
                    </Button>
                }
            </div>
        </div>
        );
    });
};