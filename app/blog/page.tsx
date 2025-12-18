
interface Post {
    id: number
    title: string
    body: string
    userId: number
}

const BlogPage = async () => {
    let data: Post[] = []
    let hasError = false
    let errorMessage = ''
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                next: { revalidate: 60}
         })

         if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
         }

         data = await response.json()
        
    } catch (error) {
        hasError = true;
        errorMessage = error instanceof Error ? error.message : 'Unknown error occured'
        data = []
    }
    
    const currentTime = new Date().toLocaleString()

    return (
        <div className="container mx-auto px-4 py-8">
            {hasError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <h3 className="font-semibold text-red-800">⚠️ Data Loading Issue</h3>
                      <p className="text-sm text-red-700">
                          Could not fetch latest posts: {errorMessage}
                      </p>
                      <p className="text-sm text-red-700">
                          Showing cached content or empty state.
                      </p>
                  </div>
              )}

            <h1 className="text-3xl font-bold mb-4">Blog Posts (ISR)</h1>
            <p className="text-gray-600 mb-6">
                This page demonstrates Incremental Static Regeneration (ISR).
                Content is statically generated but regenerates in background.
            </p>

            <div className="mb-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                <h3 className="font-semibold mb-2 text-indigo-800">🔄 ISR Status:</h3>
                <p className="text-sm text-indigo-700">
                    Page last regenerated: <strong>{currentTime}</strong>
                </p>
                <p className="text-sm text-indigo-700">
                    Revalidates every: <strong>60 seconds</strong>
                </p>
                <p className="text-sm text-indigo-700">
                    Next regeneration: In background after 60s of first request
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {data?.map((post: Post) => {
                    return (
                        <div key={post.id} className="border rounded-lg p-6 shadow-md bg-white">
                            <h2 className="text-xl font-semibold mb-3 capitalize">{post.title}</h2>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                {post.body}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">Post #{post.id}</span>
                                <span className="text-xs text-blue-600">By User {post.userId}</span>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                    <h3 className="font-semibold mb-2 text-indigo-800">💡 ISR Benefits:</h3>
                    <ul className="text-sm text-indigo-700 space-y-1">
                        <li>• Static performance with fresh content</li>
                        <li>• Background regeneration (no user waiting)</li>
                        <li>• Fallback to stale content if rebuild fails</li>
                        <li>• Perfect for content that updates occasionally</li>
                    </ul>
                </div>

                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <h3 className="font-semibold mb-2 text-amber-800">🔍 How to Verify ISR:</h3>
                    <ol className="text-sm text-amber-700 space-y-1 list-decimal list-inside">
                        <li>Note the timestamp above</li>
                        <li>Wait 60+ seconds and refresh</li>
                        <li>Check for updated timestamp</li>
                        <li>Notice no loading delay (background regen)</li>
                        <li>Inspect Network tab - no API calls visible</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default BlogPage