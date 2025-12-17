import { Products } from '../../public/product'

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

const ProductPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Products (SSG)</h1>
            <p className="text-gray-600 mb-6">
                This page demonstrates Static Site Generation (SSG).
                Data is fetched at build time and pre-rendered as static HTML.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Products.products.map((product: Product) => (
                    <div key={product.id} className="border rounded-lg p-4 shadow-md">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                            {product.description}
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-green-600">
                                ${product.price}
                            </span>
                            <span className="text-sm text-gray-500">
                                ⭐ {product.rating} | Stock: {product.stock}
                            </span>
                        </div>
                        <div className="mt-2">
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                {product.category}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">💡 SSG Benefits:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Fastest loading - pre-rendered at build time</li>
                    <li>• Great for SEO - fully crawlable content</li>
                    <li>• Perfect for content that doesn&apos;t change frequently</li>
                    <li>• Can be cached globally via CDN</li>
                </ul>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold mb-2 text-green-800">🔍 How to Verify SSG:</h3>
                <ol className="text-sm text-green-700 space-y-1 list-decimal list-inside">
                    <li>Run <code className="bg-green-100 px-1 rounded">npm run build</code> to see static generation</li>
                    <li>Check <code className="bg-green-100 px-1 rounded">.next/</code> folder for pre-generated HTML</li>
                    <li>Verify fast loading with no API calls (check Network tab)</li>
                    <li>Notice instant page loads - no loading spinners needed!</li>
                </ol>
            </div>
        </div>
    )
}

export default ProductPage