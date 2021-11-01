import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    // const [blogs, setBlogs] = useState([
    //     {title: 'My new website', body: "lorem ipsum dolor sint...", author: "Quame", id: 1},
    //     {title: 'Welcome party', body: 'lorem ipsum dolor sint...', author: "Nana", id: 2},
    //     {title: 'Web development  practice', body: 'lorem ipsum dolor sint...', author: 'Quame', id: 3}

    // ]);

    
    // const handleDelete = (currentBlogId) => {
    //     setBlogs (blogs.filter((blog)=>blog.id !== currentBlogId))
    // }
    
    // useEffect run once anytime the page re-renders. It can also have a dependency which means the useEffect will run when the dependency changes
    
    const {blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Data Loading...</div>}
            {/* This is how conditional templating is done in React. If the the LHS is True the RHS executes else it doesn't */}
            {blogs && <BlogList blogs={blogs} title='All Blogs'/>}
            {/* This is how to filter from an array */}
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'Quame')} title="Quame's Blog"/> */}
            
        </div>
    )
}

export default Home
