'use client'

interface ErrorProps {
    error: Error
}

const Error = (error: ErrorProps) => {

    return (
        <div>
            {'Error happened'}
        </div>
    )
}

export default Error