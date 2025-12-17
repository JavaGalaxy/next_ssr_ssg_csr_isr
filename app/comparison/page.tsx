export default function ComparisonPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Rendering Methods Comparison</h1>
            <p className="text-gray-600 mb-8 text-center text-lg">
                Understanding the differences between SSG, SSR, and CSR in Next.js
            </p>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800">SSG</h2>
                    <p className="text-sm text-blue-700 mb-4">Static Site Generation</p>
                    <div className="space-y-2">
                        <div className="text-sm"><strong>When:</strong> Build time</div>
                        <div className="text-sm"><strong>Where:</strong> Build server</div>
                        <div className="text-sm"><strong>Output:</strong> Static HTML</div>
                        <div className="text-sm"><strong>Example:</strong> <a href="/products" className="underline">/products</a></div>
                    </div>
                </div>

                <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
                    <h2 className="text-2xl font-bold mb-4 text-green-800">SSR</h2>
                    <p className="text-sm text-green-700 mb-4">Server-Side Rendering</p>
                    <div className="space-y-2">
                        <div className="text-sm"><strong>When:</strong> Each request</div>
                        <div className="text-sm"><strong>Where:</strong> Server</div>
                        <div className="text-sm"><strong>Output:</strong> Dynamic HTML</div>
                        <div className="text-sm"><strong>Example:</strong> <a href="/dashboard" className="underline">/dashboard</a></div>
                    </div>
                </div>

                <div className="border-2 border-purple-200 rounded-lg p-6 bg-purple-50">
                    <h2 className="text-2xl font-bold mb-4 text-purple-800">CSR</h2>
                    <p className="text-sm text-purple-700 mb-4">Client-Side Rendering</p>
                    <div className="space-y-2">
                        <div className="text-sm"><strong>When:</strong> After page load</div>
                        <div className="text-sm"><strong>Where:</strong> Browser</div>
                        <div className="text-sm"><strong>Output:</strong> Dynamic content</div>
                        <div className="text-sm"><strong>Example:</strong> <a href="/" className="underline">/ (GetProducts)</a></div>
                    </div>
                </div>
            </div>

            {/* Detailed Comparison Table */}
            <div className="overflow-x-auto mb-12">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-4 text-left">Aspect</th>
                            <th className="border border-gray-300 p-4 text-center bg-blue-50">SSG</th>
                            <th className="border border-gray-300 p-4 text-center bg-green-50">SSR</th>
                            <th className="border border-gray-300 p-4 text-center bg-purple-50">CSR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-4 font-semibold">Loading Speed</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">⚡ Fastest</td>
                            <td className="border border-gray-300 p-4 text-center text-yellow-600">🚀 Fast</td>
                            <td className="border border-gray-300 p-4 text-center text-orange-600">⏳ Slower</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-4 font-semibold">SEO Performance</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">✅ Excellent</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">✅ Excellent</td>
                            <td className="border border-gray-300 p-4 text-center text-red-600">❌ Poor</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4 font-semibold">Data Freshness</td>
                            <td className="border border-gray-300 p-4 text-center text-orange-600">📅 Build time</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">🔄 Real-time</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">🔄 Real-time</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-4 font-semibold">Server Load</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">💚 None</td>
                            <td className="border border-gray-300 p-4 text-center text-red-600">🔴 High</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">💚 Low</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4 font-semibold">Hosting Cost</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">💰 Cheapest</td>
                            <td className="border border-gray-300 p-4 text-center text-red-600">💸 Expensive</td>
                            <td className="border border-gray-300 p-4 text-center text-yellow-600">💵 Medium</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-4 font-semibold">Interactivity</td>
                            <td className="border border-gray-300 p-4 text-center text-yellow-600">⚡ After hydration</td>
                            <td className="border border-gray-300 p-4 text-center text-yellow-600">⚡ After hydration</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">🎯 Immediate</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4 font-semibold">Use Case</td>
                            <td className="border border-gray-300 p-4 text-center">📄 Blogs, docs</td>
                            <td className="border border-gray-300 p-4 text-center">👤 Dashboards</td>
                            <td className="border border-gray-300 p-4 text-center">🎮 SPAs, apps</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* When to Use Each */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-blue-800">When to Use SSG</h3>
                    <ul className="text-sm space-y-2">
                        <li>✅ Content rarely changes</li>
                        <li>✅ Marketing pages</li>
                        <li>✅ Blogs & documentation</li>
                        <li>✅ Product catalogs</li>
                        <li>✅ Maximum performance needed</li>
                        <li>✅ SEO critical</li>
                    </ul>
                </div>

                <div className="border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-green-800">When to Use SSR</h3>
                    <ul className="text-sm space-y-2">
                        <li>✅ Personalized content</li>
                        <li>✅ Real-time data needed</li>
                        <li>✅ User dashboards</li>
                        <li>✅ Search results</li>
                        <li>✅ Dynamic content + SEO</li>
                        <li>✅ Server-side auth required</li>
                    </ul>
                </div>

                <div className="border border-purple-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-purple-800">When to Use CSR</h3>
                    <ul className="text-sm space-y-2">
                        <li>✅ Highly interactive apps</li>
                        <li>✅ Admin panels</li>
                        <li>✅ Real-time updates</li>
                        <li>✅ User-specific data</li>
                        <li>✅ SEO not important</li>
                        <li>✅ Complex state management</li>
                    </ul>
                </div>
            </div>

            {/* Implementation Code Examples */}
            <div className="bg-gray-50 rounded-lg p-6 mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Implementation Examples</h3>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                        <h4 className="font-semibold mb-3 text-blue-800">SSG Implementation</h4>
                        <pre className="bg-blue-100 p-4 rounded text-xs overflow-x-auto">
{`// Static import
import { Products } from './data'

export default function Page() {
  return (
    <div>
      {Products.map(...)}
    </div>
  )
}`}
                        </pre>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 text-green-800">SSR Implementation</h4>
                        <pre className="bg-green-100 p-4 rounded text-xs overflow-x-auto">
{`// Async component
export default async function Page() {
  const data = await fetch('api', {
    cache: 'no-store'
  })
  return <div>{data.map(...)}</div>
}`}
                        </pre>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 text-purple-800">CSR Implementation</h4>
                        <pre className="bg-purple-100 p-4 rounded text-xs overflow-x-auto">
{`// Client-side fetch
export default function Page() {
  const data = use(fetchData())

  return <div>{data.map(...)}</div>
}`}
                        </pre>
                    </div>
                </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-6 text-center">Performance Comparison</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-4">
                        <div className="text-3xl font-bold text-blue-600 mb-2">~100ms</div>
                        <div className="text-sm text-gray-600">SSG Load Time</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-blue-600 h-2 rounded-full w-1/4"></div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="text-3xl font-bold text-green-600 mb-2">~300ms</div>
                        <div className="text-sm text-gray-600">SSR Load Time</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-green-600 h-2 rounded-full w-3/4"></div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="text-3xl font-bold text-purple-600 mb-2">~800ms</div>
                        <div className="text-sm text-gray-600">CSR Load Time</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-purple-600 h-2 rounded-full w-full"></div>
                        </div>
                    </div>
                </div>
                <p className="text-xs text-gray-500 text-center mt-4">
                    * Load times are approximate and vary based on content size and network conditions
                </p>
            </div>
        </div>
    )
}