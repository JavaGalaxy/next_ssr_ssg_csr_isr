
import axios from 'axios'
import {ViewDetails} from './ViewDetails'
import {use} from 'react'

export const GetProducts = () => {

    const getAPICall = async () => {
        const response = await axios.get('https://dummyjson.com/products')  

        return response;
    }
    
    const products = use(getAPICall());

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Live Products (CSR)</h1>
            <p className="text-gray-600 mb-6">
                This component demonstrates Client-Side Rendering (CSR).
                Data is fetched in the browser using React 18 `use()` hook.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {products.data.products.map((product: any) => {
                    return (
                        <div key={product.id} className="border rounded-lg p-4 shadow-md">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-48 object-cover mb-4 rounded"
                            />
                            <h2 className="text-lg font-semibold mb-2">
                                {product.title}
                            </h2>
                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                {product.description}
                            </p>
                            <ViewDetails
                                price={product.price}
                                category={product.category}
                            />
                        </div>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h3 className="font-semibold mb-2 text-purple-800">💡 CSR Benefits:</h3>
                    <ul className="text-sm text-purple-700 space-y-1">
                        <li>• Interactive while loading</li>
                        <li>• Reduces server load</li>
                        <li>• Great for dynamic user interactions</li>
                        <li>• Can show loading states</li>
                    </ul>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h3 className="font-semibold mb-2 text-orange-800">🔍 How to Verify CSR:</h3>
                    <ol className="text-sm text-orange-700 space-y-1 list-decimal list-inside">
                        <li>Check Network tab - see API call to dummyjson</li>
                        <li>View page source - no product content in HTML</li>
                        <li>Disable JavaScript - page will be blank</li>
                        <li>Notice Suspense loading boundary in action</li>
                    </ol>
                </div>
            </div>
        </div>
    )

}