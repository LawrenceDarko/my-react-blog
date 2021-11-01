import { useParams } from "react-router-dom"
import useFetch from "./useFetch";
import { useHistory } from "react-router";

const BlogDetails = () => {
    // The useParams() function is used to grab variables from the router in the navigation bar. In this case 'id'
    const { id } = useParams();
    const {blogs, error, isPending} = useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/'+ blogs.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
    

    return (
        <div className="blog-details">
            {error && <div>{ error }</div>}
            {isPending && <div>Blog Loading...</div>}
            {blogs && (
                <article>
                    <h2>{ blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <div>{ blogs.body }</div>
                    <button onClick={()=>handleClick()}>Delete</button>
                </article>
                
            )}
        </div>
    )
}

export default BlogDetails
