export default function ComparisonPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Rendering Methods Comparison</h1>
            <p className="text-gray-600 mb-8 text-center text-lg">
                Understanding the differences between SSG, SSR, ISR, and CSR in Next.js
            </p>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

                <div className="border-2 border-orange-200 rounded-lg p-6 bg-orange-50">
                    <h2 className="text-2xl font-bold mb-4 text-orange-800">ISR</h2>
                    <p className="text-sm text-orange-700 mb-4">Incremental Static Regeneration</p>
                    <div className="space-y-2">
                        <div className="text-sm"><strong>When:</strong> Build time + Background</div>
                        <div className="text-sm"><strong>Where:</strong> Build server + Runtime</div>
                        <div className="text-sm"><strong>Output:</strong> Static HTML (refreshed)</div>
                        <div className="text-sm"><strong>Example:</strong> <a href="/blog" className="underline">/blog</a></div>
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
                            <th className="border border-gray-300 p-4 text-center bg-orange-50">ISR</th>
                            <th className="border border-gray-300 p-4 text-center bg-purple-50">CSR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-4 font-semibold">Loading Speed</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">⚡ Fastest</td>
                            <td className="border border-gray-300 p-4 text-center text-yellow-600">🚀 Fast</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">⚡ Fast (cached)</td>
                            <td className="border border-gray-300 p-4 text-center text-orange-600">⏳ Slower</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-4 font-semibold">SEO Performance</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">✅ Excellent</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">✅ Excellent</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">✅ Excellent</td>
                            <td className="border border-gray-300 p-4 text-center text-red-600">❌ Poor</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4 font-semibold">Data Freshness</td>
                            <td className="border border-gray-300 p-4 text-center text-orange-600">📅 Build time</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">🔄 Real-time</td>
                            <td className="border border-gray-300 p-4 text-center text-yellow-600">⏱️ Configurable</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">🔄 Real-time</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-4 font-semibold">Server Load</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">💚 None</td>
                            <td className="border border-gray-300 p-4 text-center text-red-600">🔴 High</td>
                            <td className="border border-gray-300 p-4 text-center text-yellow-600">🟡 Low (regen)</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">💚 Low</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4 font-semibold">Hosting Cost</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">💰 Cheapest</td>
                            <td className="border border-gray-300 p-4 text-center text-red-600">💸 Expensive</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">💰 Cheap</td>
                            <td className="border border-gray-300 p-4 text-center text-yellow-600">💵 Medium</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-4 font-semibold">Interactivity</td>
                            <td className="border border-gray-300 p-4 text-center text-yellow-600">⚡ After hydration</td>
                            <td className="border border-gray-300 p-4 text-center text-yellow-600">⚡ After hydration</td>
                            <td className="border border-gray-300 p-4 text-center text-yellow-600">⚡ After hydration</td>
                            <td className="border border-gray-300 p-4 text-center text-green-600">🎯 Immediate</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4 font-semibold">Use Case</td>
                            <td className="border border-gray-300 p-4 text-center">📄 Blogs, docs</td>
                            <td className="border border-gray-300 p-4 text-center">👤 Dashboards</td>
                            <td className="border border-gray-300 p-4 text-center">📰 News, blogs</td>
                            <td className="border border-gray-300 p-4 text-center">🎮 SPAs, apps</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* When to Use Each */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

                <div className="border border-orange-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-orange-800">When to Use ISR</h3>
                    <ul className="text-sm space-y-2">
                        <li>✅ Content updates periodically</li>
                        <li>✅ E-commerce product pages</li>
                        <li>✅ News & blog sites</li>
                        <li>✅ Static performance needed</li>
                        <li>✅ Fresh content + SEO</li>
                        <li>✅ High traffic sites</li>
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

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
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
                        <h4 className="font-semibold mb-3 text-orange-800">ISR Implementation</h4>
                        <pre className="bg-orange-100 p-4 rounded text-xs overflow-x-auto">
{`// ISR with revalidation
export default async function Page() {
  const data = await fetch('api', {
    next: { revalidate: 60 }
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
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Performance Comparison</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
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
                        <div className="text-3xl font-bold text-orange-600 mb-2">~150ms</div>
                        <div className="text-sm text-gray-600">ISR Load Time</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-orange-600 h-2 rounded-full w-1/3"></div>
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

            {/* Next.js Decision Tree */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-lg p-8 mb-12">
                <h3 className="text-2xl font-bold mb-8 text-center">How Next.js Determines Rendering Method</h3>

                {/* Build Time Analysis */}
                <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">🔨 Build Time Analysis</h4>
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                                <div>
                                    <h5 className="font-semibold">Component Analysis</h5>
                                    <p className="text-sm text-gray-600">Next.js scans your component code structure</p>
                                </div>
                            </div>
                            <div className="ml-12 space-y-3">
                                <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                                    <code className="text-sm">async function Component()</code> → Triggers server-side analysis
                                </div>
                                <div className="p-3 bg-gray-50 rounded border-l-4 border-gray-400">
                                    <code className="text-sm">function Component()</code> → Static component analysis
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decision Tree Flowchart */}
                <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">🌳 Decision Tree Flow</h4>
                    <div className="bg-white rounded-lg p-6 border border-gray-200 overflow-x-auto">
                        <div className="min-w-[800px] relative">
                            {/* Root */}
                            <div className="text-center mb-8">
                                <div className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold text-lg">
                                    Component Found
                                </div>
                                {/* Down arrow */}
                                <div className="text-center mt-2">
                                    <div className="text-2xl text-gray-600">↓</div>
                                </div>
                            </div>

                            {/* Level 1: Async Check */}
                            <div className="text-center mb-8">
                                <div className="inline-block bg-yellow-400 px-6 py-3 rounded-lg font-semibold text-lg">
                                    Is Component Async?
                                </div>
                                {/* Branch arrows */}
                                <div className="flex justify-center mt-4 space-x-32">
                                    <div className="text-2xl text-blue-600">↙</div>
                                    <div className="text-2xl text-green-600">↘</div>
                                </div>
                            </div>

                            {/* Level 2: Branch Split */}
                            <div className="grid grid-cols-2 gap-16 mb-8">
                                {/* No Branch */}
                                <div className="text-center">
                                    <div className="bg-blue-500 text-white px-6 py-3 rounded-lg mb-4 font-semibold text-lg">
                                        ❌ No
                                    </div>
                                    {/* Down arrow */}
                                    <div className="text-center mb-2">
                                        <div className="text-2xl text-blue-600">↓</div>
                                    </div>
                                    <div className="bg-blue-100 border-2 border-blue-300 px-6 py-4 rounded-lg">
                                        <div className="font-bold text-blue-800 text-xl">SSG</div>
                                        <div className="text-sm text-blue-600 font-semibold">Static Site Generation</div>
                                        <div className="text-xs text-blue-500 mt-1">Pre-rendered at build time</div>
                                    </div>
                                </div>

                                {/* Yes Branch */}
                                <div className="text-center">
                                    <div className="bg-green-500 text-white px-6 py-3 rounded-lg mb-4 font-semibold text-lg">
                                        ✅ Yes
                                    </div>
                                    {/* Down arrow */}
                                    <div className="text-center mb-2">
                                        <div className="text-2xl text-green-600">↓</div>
                                    </div>
                                    <div className="bg-yellow-100 border-2 border-yellow-300 px-6 py-3 rounded-lg font-semibold text-lg">
                                        Check Fetch Options
                                    </div>
                                    {/* Multi-branch arrows */}
                                    <div className="flex justify-center mt-4 space-x-8">
                                        <div className="text-xl text-red-600">↙</div>
                                        <div className="text-xl text-orange-600">↓</div>
                                        <div className="text-xl text-blue-600">↘</div>
                                    </div>
                                </div>
                            </div>

                            {/* Level 3: Fetch Analysis */}
                            <div className="grid grid-cols-1 gap-4 ml-auto mr-auto" style={{width: '50%'}}>
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="bg-red-100 border-2 border-red-300 px-4 py-4 rounded-lg">
                                            <div className="font-semibold text-red-800 text-sm mb-2">cache: &apos;no-store&apos;</div>
                                            <div className="text-xl text-red-600 mb-2">↓</div>
                                            <div className="font-bold text-green-800 text-lg bg-green-100 py-2 rounded">SSR</div>
                                            <div className="text-xs text-red-600 mt-1">Fresh on every request</div>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <div className="bg-orange-100 border-2 border-orange-300 px-4 py-4 rounded-lg">
                                            <div className="font-semibold text-orange-800 text-sm mb-2">revalidate: X</div>
                                            <div className="text-xl text-orange-600 mb-2">↓</div>
                                            <div className="font-bold text-orange-800 text-lg bg-orange-200 py-2 rounded">ISR</div>
                                            <div className="text-xs text-orange-600 mt-1">Cached + background refresh</div>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <div className="bg-blue-100 border-2 border-blue-300 px-4 py-4 rounded-lg">
                                            <div className="font-semibold text-blue-800 text-sm mb-2">No cache options</div>
                                            <div className="text-xl text-blue-600 mb-2">↓</div>
                                            <div className="font-bold text-blue-800 text-lg bg-blue-200 py-2 rounded">SSG</div>
                                            <div className="text-xs text-blue-600 mt-1">Static with data</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Runtime Decision */}
                <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">⚡ Runtime Decision Process</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <h5 className="font-semibold mb-3 text-purple-700">CSR Detection</h5>
                            <div className="space-y-2 text-sm">
                                <div>✅ Uses React hooks (useState, useEffect)</div>
                                <div>✅ Client-side data fetching</div>
                                <div>✅ Browser-only APIs</div>
                                <div>✅ &apos;use client&apos; directive</div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <h5 className="font-semibold mb-3 text-green-700">Server Components</h5>
                            <div className="space-y-2 text-sm">
                                <div>✅ Async function components</div>
                                <div>✅ Direct database access</div>
                                <div>✅ Server-side APIs</div>
                                <div>✅ No browser APIs</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Code Examples */}
                <div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">📝 Pattern Recognition Examples</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <h5 className="font-semibold mb-3 text-blue-700">Static Patterns (SSG)</h5>
                            <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{`// ✅ SSG - Static imports
import { data } from './data'

export default function Page() {
  return <div>{data.map(...)}</div>
}

// ✅ SSG - No fetch calls
export default async function Page() {
  // No async operations
  return <div>Static content</div>
}`}
                            </pre>
                        </div>

                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <h5 className="font-semibold mb-3 text-orange-700">Dynamic Patterns</h5>
                            <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{`// 🔄 ISR - Revalidate option
export default async function Page() {
  const data = await fetch(url, {
    next: { revalidate: 3600 }
  })
  return <div>{data}</div>
}

// ⚡ SSR - No cache
export default async function Page() {
  const data = await fetch(url, {
    cache: 'no-store'
  })
  return <div>{data}</div>
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}