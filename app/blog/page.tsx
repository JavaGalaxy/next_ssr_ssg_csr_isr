
const BlogPage = async () => {

    const response = await fetch('https://api.example.com/posts', {
        next: { revalidate: 600}
    })

    const data = await response.json()

    return (
        <>
            {data.map}
        </>
    )
}

export default BlogPage