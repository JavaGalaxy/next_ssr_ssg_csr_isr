import {ViewDetails} from '../components/ViewDetails'

interface Product {
    id: number
    title: string
    description: string
    price: number
    category: string
    rating: number
    thumbnail: string
    stock: number
}

interface ApiResponse {
    products: Product[]
    total: number
    skip: number
    limit: number
}

export default async function DashboardPage() {
    // This runs on SERVER at REQUEST TIME (SSR)
    const response = await fetch('https://dummyjson.com/products', {
        // Important: disable cache for true SSR behavior
        cache: 'no-store'
    })

    if (!response.ok) {
        throw new Error('Failed to fetch products')
    }

    const data: ApiResponse = await response.json()
    const currentTime = new Date().toLocaleString()

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Dashboard (SSR)</h1>
            <p className="text-gray-600 mb-6">
                This page demonstrates Server-Side Rendering (SSR).
                Data is fetched on the server for every request.
            </p>

            <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold mb-2 text-yellow-800">🕒 Live Server Data:</h3>
                <p className="text-sm text-yellow-700">
                    Page rendered at: <strong>{currentTime}</strong>
                </p>
                <p className="text-sm text-yellow-700">
                    Total products: <strong>{data.total}</strong>
                </p>
                <p className="text-sm text-yellow-700">
                    Fetched fresh from API on every page load!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {data.products.slice(0, 9).map((product: Product) => (
                    <div key={product.id} className="border rounded-lg p-4 shadow-md">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {product.description}
                        </p>
                        <ViewDetails
                            price={product.price}
                            category={product.category}
                        />
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="font-semibold mb-2 text-green-800">💡 SSR Benefits:</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Fresh data on every request</li>
                        <li>• Fully rendered HTML for SEO</li>
                        <li>• No loading spinners needed</li>
                        <li>• Server-side data processing</li>
                    </ul>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="font-semibold mb-2 text-green-800">🔍 How to Verify SSR:</h3>
                    <ol className="text-sm text-green-700 space-y-1 list-decimal list-inside">
                        <li>View page source - see full HTML content</li>
                        <li>Check Network tab - no API calls to dummyjson</li>
                        <li>Refresh page - timestamp updates each time</li>
                        <li>Disable JavaScript - page still works!</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}