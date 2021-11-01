import { useState } from "react"
import { useHistory } from "react-router"

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Quame')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();

    const blog = {title, body, author}

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsPending('true')
        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('New Post Added');
            setIsPending(false)
            history.push('/');    
        })
        }, 1000);
        
    }
    

    return (
        <div className="create">
            <h2>Add New Blog</h2>
            {isPending && <div>Loading...</div>}
            <form action="" onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required 
                    value = {title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                    // console.log(e.target.value)
                />

                <label>Blog body:</label>
                <textarea 
                value = {body}
                onChange={(e)=>{setBody(e.target.value)}}
                required></textarea>

                <label>Blog author:</label>
                <select
                value = {author}
                onChange={(e)=>{setAuthor(e.target.value)}}
                >
                    <option value="Quame">Quame</option>
                    <option value="Yaw">Yaw</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    )
}

export default Create
