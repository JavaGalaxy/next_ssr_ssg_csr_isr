'use client'

interface ErrorProps {
    error: Error & {digest?: string}
    reset: ()=> void
}

const Error = ({error, reset}: ErrorProps) => {

    return (
        <div>
            <h2>Somethign went wrong!</h2>
            <button onClick={reset}>Try again</button>
        </div>
    )
}

export default Error